import { http } from '../../../shared/utils/http';

export const createReservation = async (
  userId: string,
  bikeId: string
) => {
  await http.post('/admin/reservations', {
    userId,
    bikeId,
  });
};

export const getUserActiveReservations = async (userId: string) => {
  const response = await http.get(
    `/admin/users/${userId}/reservations`
  );

  return response.data;
};

export const finishReservation = async (reservationId: string) => {
  await http.patch(
    `/admin/reservations/${reservationId}/finish`
  );
};