import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useAdminBikes } from '../hooks/useAdminBikes';
import { useAdminStations } from '../hooks/useAdminStations';
import {
  createBike,
  deleteBike,
} from '../api/admin.api';

export const AdminPage = () => {
  const { bikes, loading, refetch } = useAdminBikes();
  const { stations } = useAdminStations();

  const [openCreate, setOpenCreate] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const [selectedBikeId, setSelectedBikeId] = useState<string | null>(null);

  const [code, setCode] = useState('');
  const [stationId, setStationId] = useState('');

  // CREAR BICICLETA
  const handleCreate = async () => {
    if (!code || !stationId) return;

    await createBike({ code, stationId });
    setOpenCreate(false);
    setCode('');
    setStationId('');
    await refetch();
  };

  // ABRIR CONFIRMACION
  const handleOpenConfirm = (bikeId: string) => {
    setSelectedBikeId(bikeId);
    setOpenConfirm(true);
  };

  // CONFIRMAR ELIMINACION
  const handleConfirmDelete = async () => {
    if (!selectedBikeId) return;

    await deleteBike(selectedBikeId);
    setOpenConfirm(false);
    setSelectedBikeId(null);
    await refetch();
  };

  return (
    <Box mt={8} display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        sx={{
          background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Panel Administrativo
      </Typography>

      <Button
        variant="contained"
        sx={{
          mb: 4,
          borderRadius: 3,
          background:
            'linear-gradient(90deg, #00E5FF, #8B5CF6)',
        }}
        onClick={() => setOpenCreate(true)}
      >
        Crear bicicleta
      </Button>

      <Box width="100%" maxWidth={700}>
        {loading && <Typography>Cargando...</Typography>}

        {bikes.map((bike) => (
          <Card
            key={bike.id}
            sx={{
              mb: 2,
              borderRadius: 4,
              background:
                'linear-gradient(145deg, #111827, #1F2937)',
              border: '1px solid rgba(0,229,255,0.2)',
              boxShadow: '0 0 20px rgba(0,229,255,0.08)',
            }}
          >
            <CardContent>
              <Typography fontWeight={600}>
                Código: {bike.code}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Estado: {bike.status}
              </Typography>

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 2 }}
                onClick={() => handleOpenConfirm(bike.id)}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* MODAL CREAR */}
      <Dialog open={openCreate} onClose={() => setOpenCreate(false)}>
        <DialogContent sx={{ minWidth: 350 }}>
          <Typography mb={2} fontWeight={600}>
            Nueva bicicleta
          </Typography>

          <TextField
            label="Código"
            fullWidth
            sx={{ mb: 2 }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <TextField
            select
            label="Estación"
            fullWidth
            sx={{ mb: 2 }}
            value={stationId}
            onChange={(e) => setStationId(e.target.value)}
          >
            {stations.map((station) => (
              <MenuItem key={station.id} value={station.id}>
                {station.name}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            }}
            onClick={handleCreate}
          >
            Crear
          </Button>
        </DialogContent>
      </Dialog>

      {/* MODAL CONFIRMACION */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
      >
        <DialogContent>
          <Typography fontWeight={600} mb={2}>
            ¿Estás seguro que deseas eliminar esta bicicleta?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpenConfirm(false)}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmDelete}
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};