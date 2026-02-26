import { useEffect, useState } from 'react';
import { getStations } from '../api/stations.api';
import type { Station } from '../types/Station';

export const useStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStations = async () => {
    try {
      setLoading(true);
      const data = await getStations();
      setStations(data);
    } catch (err) {
      setError('Error loading stations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);

  return { stations, loading, error, refetch: fetchStations };
};