import { http } from '../../../shared/utils/http';
import type { Station } from '../types/Station';

export const getStations = async (): Promise<Station[]> => {
  const response = await http.get('/stations');

  return response.data.map((station: any) => ({
    id: station.id,
    name: station.name,
    city: station.city,
    location: station.location,
    capacity: station.capacity,
    bikesAvailable: station.bikesAvailable.map((bike: any) => ({
      id: bike.id,
      code: bike.code,
      status: bike.status,
      stationId: bike.stationId,
    })),
  }));
};