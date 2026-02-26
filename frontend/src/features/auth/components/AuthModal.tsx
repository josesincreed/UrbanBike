import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface Props {
  open: boolean;
  onClose: () => void;
  onAuthenticated: () => void;
}

export const AuthModal = ({ open, onClose, onAuthenticated }: Props) => {
  const { register, loading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!name || !email) return;

    await register(name, email);
    onAuthenticated();
    onClose();
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
            'linear-gradient(145deg, rgba(17,24,39,0.9), rgba(31,41,55,0.85))',
          border: '1px solid rgba(0,229,255,0.3)',
          boxShadow: '0 0 60px rgba(0,229,255,0.2)',
        },
      }}
    >
      <DialogContent sx={{ p: 5, minWidth: 400 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Bienvenido a UrbanBike
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Nombre"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              borderRadius: 3,
              py: 1.5,
              background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
              fontWeight: 600,
              '&:hover': {
                opacity: 0.9,
              },
            }}
          >
            {loading ? 'Creando usuario...' : 'Continuar'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};