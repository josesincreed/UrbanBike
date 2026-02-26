import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'text.secondary',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} UrbanBike — Sistema de reservas inteligentes
      </Typography>
    </Box>
  );
};