import { http } from '../../../shared/utils/http';

export interface CreateBikeDto {
  code: string;
  stationId: string;
}

export interface UpdateBikeDto {
  code?: string;
  stationId?: string;
  status?: string;
}

export const getBikes = async () => {
  const response = await http.get('/admin/bikes');
  return response.data;
};

export const createBike = async (dto: CreateBikeDto) => {
  await http.post('/admin/bikes', dto);
};

export const updateBike = async (
  id: string,
  dto: UpdateBikeDto
) => {
  await http.patch(`/admin/bikes/${id}`, dto);
};

export const deleteBike = async (id: string) => {
  await http.delete(`/admin/bikes/${id}`);
};