import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from '@mui/material';
import type { Station } from '../types/Station';

interface Props {
  station: Station;
  onReserve: () => void;
}

export const StationCard = ({ station, onReserve }: Props) => {
  const availableCount = station.bikesAvailable.length;

  return (
    <Card
      sx={{
        borderRadius: 4,
        background: 'linear-gradient(145deg, #111827, #1F2937)',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 0 20px rgba(0,229,255,0.05)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',

        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 0 35px rgba(0,229,255,0.2)',
          border: '1px solid rgba(0,229,255,0.3)',
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ letterSpacing: 0.5 }}
        >
          {station.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {station.city} — {station.location}
        </Typography>

        <Box mt={2}>
          <Chip
            label={`${availableCount} bicicletas disponibles`}
            color={availableCount > 0 ? 'success' : 'default'}
            sx={{
              fontWeight: 600,
              background:
                availableCount > 0
                  ? 'linear-gradient(90deg, rgba(0,229,255,0.2), rgba(139,92,246,0.2))'
                  : undefined,
              border:
                availableCount > 0
                  ? '1px solid rgba(0,229,255,0.3)'
                  : undefined,
            }}
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={onReserve}
          disabled={availableCount === 0}
          sx={{
            mt: 3,
            borderRadius: 3,
            py: 1.3,
            fontWeight: 600,
            background:
              availableCount > 0
                ? 'linear-gradient(90deg, #00E5FF, #8B5CF6)'
                : undefined,
            transition: '0.3s',
            '&:hover': {
              opacity: 0.9,
              transform: availableCount > 0 ? 'scale(1.02)' : undefined,
            },
          }}
        >
          Reservar
        </Button>
      </CardContent>
    </Card>
  );
};