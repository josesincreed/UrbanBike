import { useEffect, useState } from 'react';
import { http } from '../../../shared/utils/http';

export const useAdminStations = () => {
  const [stations, setStations] = useState<any[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      const response = await http.get('/admin/stations');
      setStations(response.data);
    };

    fetchStations();
  }, []);

  return { stations };
};