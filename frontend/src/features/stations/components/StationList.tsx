import {
  CircularProgress,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { useStations } from '../hooks/useStations';
import { StationCard } from './StationCard';
import { AuthModal } from '../../auth/components/AuthModal';
import { useAuth } from '../../auth/hooks/useAuth';
import { ReservationModal } from '../../reservations/components/ReservationModal';

export const StationList = () => {
  const { stations, loading, error, refetch } = useStations();
  const { getUser } = useAuth();

  const [authOpen, setAuthOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedStationId, setSelectedStationId] = useState<string | null>(
    null
  );

  const handleReserveClick = (stationId: string) => {
    const user = getUser();

    if (!user) {
      setSelectedStationId(stationId);
      setAuthOpen(true);
      return;
    }

    setSelectedStationId(stationId);
    setReservationOpen(true);
  };

  const handleAuthenticated = () => {
    setAuthOpen(false);
    setReservationOpen(true);
  };

  const selectedStation = stations.find(
    (s) => s.id === selectedStationId
  );

  const user = getUser();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Estaciones disponibles
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}
      >
        {stations.map((station) => (
          <StationCard
            key={station.id}
            station={station}
            onReserve={() => handleReserveClick(station.id)}
          />
        ))}
      </Box>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthenticated={handleAuthenticated}
      />

      {selectedStation && user && (
        <ReservationModal
          open={reservationOpen}
          onClose={() => setReservationOpen(false)}
          bikes={selectedStation.bikesAvailable}
          userId={user.id}
          onReserved={refetch}
        />
      )}
    </Container>
  );
};