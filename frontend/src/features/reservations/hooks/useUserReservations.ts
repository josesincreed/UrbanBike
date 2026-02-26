import { useEffect, useState, useCallback } from 'react';
import { getUserActiveReservations } from '../api/reservations.api';
import { http } from '../../../shared/utils/http';

interface Reservation {
  id: string;
  bikeId: string;
  bikeCode: string;
  status: string;
  startTime: string;
}

export const useUserReservations = (userId: string | null) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    try {
      // Traer reservas activas
      const reservationsData = await getUserActiveReservations(userId);

      // Traer todas las bikes
      const bikesResponse = await http.get('/admin/bikes');
      const bikes = bikesResponse.data;

      // Crear mapa id → code
      const bikesMap: Record<string, string> = {};
      bikes.forEach((bike: any) => {
        bikesMap[bike.id] = bike.code;
      });

      // Normalizar con bikeCode incluido
      const normalized = reservationsData.map((r: any) => ({
        id: r.id,
        bikeId: r.bikeId,
        bikeCode: bikesMap[r.bikeId] ?? r.bikeId.slice(0, 8),
        status: r.status,
        startTime: r.startTime,
      }));

      setReservations(normalized);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  return { reservations, loading, refetch: fetchReservations };
};