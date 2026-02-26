import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { useUserReservations } from '../hooks/useUserReservations';
import { finishReservation } from '../api/reservations.api';

export const UserReservations = ({
  onReservationFinished,
}: {
  onReservationFinished: () => void;
}) => {
  const { getUser } = useAuth();
  const user = getUser();

  const { reservations, loading, refetch } =
    useUserReservations(user?.id ?? null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] =
    useState<string | null>(null);

  const handleOpenConfirm = (reservationId: string) => {
    setSelectedReservationId(reservationId);
    setConfirmOpen(true);
  };

  const handleConfirmFinish = async () => {
    if (!selectedReservationId) return;

    await finishReservation(selectedReservationId);

    setConfirmOpen(false);
    setSelectedReservationId(null);

    await refetch();
    onReservationFinished();
  };

  if (!user) return null;

  return (
    <Box
      mt={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={5}
        textAlign="center"
        sx={{
          background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Tus reservas activas
      </Typography>

      <Box width="100%" maxWidth={600}>
        {loading && (
          <Typography textAlign="center">
            Cargando...
          </Typography>
        )}

        {reservations.length === 0 && (
          <Typography
            color="text.secondary"
            textAlign="center"
          >
            No tienes reservas activas.
          </Typography>
        )}

        {reservations.map((reservation) => (
          <Card
            key={reservation.id}
            sx={{
              mb: 3,
              borderRadius: 4,
              background:
                'linear-gradient(145deg, #111827, #1F2937)',
              border: '1px solid rgba(0,229,255,0.25)',
              boxShadow: '0 0 25px rgba(0,229,255,0.1)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 0 35px rgba(0,229,255,0.2)',
              },
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography fontWeight={600}>
                  Bicicleta: {reservation.bikeCode}
                </Typography>

                <Chip
                  label="ACTIVA"
                  sx={{
                    background:
                      'linear-gradient(90deg, #00E5FF, #8B5CF6)',
                    color: 'black',
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                mt={1}
              >
                Inicio:{' '}
                {new Date(
                  reservation.startTime
                ).toLocaleString()}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: 3,
                  background:
                    'linear-gradient(90deg, #EF4444, #F97316)',
                  fontWeight: 600,
                }}
                onClick={() =>
                  handleOpenConfirm(reservation.id)
                }
              >
                Liberar bicicleta
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* MODAL CONFIRMACION */}
      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
      >
        <DialogContent>
          <Typography fontWeight={600} mb={2}>
            ¿Deseas finalizar esta reserva?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setConfirmOpen(false)}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmFinish}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};