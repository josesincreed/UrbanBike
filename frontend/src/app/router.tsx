import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../shared/components/Layout';
import { StationList } from '../features/stations/components/StationList';
import { UserReservations } from '../features/reservations/components/UserReservations';
import { AdminPage } from '../features/admin/pages/AdminPage'; // si ya existe

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <StationList />,
      },
      {
        path: 'reservas',
        element: <UserReservations onReservationFinished={() => {}} />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
]);