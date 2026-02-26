import { http } from '../../../shared/utils/http';
import type { Station } from '../types/Station';

export const getStations = async (): Promise<Station[]> => {
  const response = await http.get('/public/stations');
  return response.data;
};