import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import type { Bike } from '../../stations/types/Station';
import { createReservation } from '../api/reservations.api';

interface Props {
  open: boolean;
  onClose: () => void;
  bikes: Bike[];
  userId: string;
  onReserved: () => void;
}

export const ReservationModal = ({
  open,
  onClose,
  bikes,
  userId,
  onReserved,
}: Props) => {
  const [selectedBikeId, setSelectedBikeId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!selectedBikeId) return;

    setLoading(true);
    try {
      await createReservation(userId, selectedBikeId);
      onReserved();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '24px',
          backdropFilter: 'blur(20px)',
          background:
            'linear-gradient(145deg, rgba(17,24,39,0.95), rgba(31,41,55,0.9))',
          border: '1px solid rgba(0,229,255,0.3)',
          boxShadow: '0 0 60px rgba(0,229,255,0.2)',
        },
      }}
    >
      <DialogContent sx={{ minWidth: 450, p: 4 }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Selecciona tu bicicleta
        </Typography>

        <List>
          {bikes.map((bike) => (
            <ListItemButton
              key={bike.id}
              selected={selectedBikeId === bike.id}
              onClick={() => setSelectedBikeId(bike.id)}
              sx={{
                borderRadius: 2,
                mb: 1,
                border: '1px solid rgba(255,255,255,0.05)',
                '&.Mui-selected': {
                  border: '1px solid rgba(0,229,255,0.5)',
                  background: 'rgba(0,229,255,0.1)',
                },
              }}
            >
              <ListItemText primary={`Código: ${bike.code}`} />
            </ListItemButton>
          ))}
        </List>

        <Box mt={3}>
          <Button
            fullWidth
            variant="contained"
            disabled={!selectedBikeId || loading}
            onClick={handleConfirm}
            sx={{
              borderRadius: 3,
              py: 1.3,
              fontWeight: 600,
              background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            }}
          >
            {loading ? 'Reservando...' : 'Confirmar Reserva'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};