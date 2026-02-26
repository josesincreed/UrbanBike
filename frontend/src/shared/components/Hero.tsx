import { Box, Typography } from '@mui/material';

export const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: 2,
        mt: 6,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 950,
          textAlign: 'center',
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          borderRadius: '28px',
          position: 'relative',
          background:
            'linear-gradient(145deg, rgba(17,24,39,0.7), rgba(31,41,55,0.6))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 0 40px rgba(0,229,255,0.05)',
          transition: 'all 0.4s ease',
          overflow: 'hidden',

          '&:hover': {
            boxShadow: '0 0 80px rgba(0,229,255,0.2)',
            border: '1px solid rgba(0,229,255,0.4)',
            transform: 'translateY(-6px)',
          },

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '28px',
            padding: '1px',
            background:
              'linear-gradient(90deg, rgba(0,229,255,0.4), rgba(139,92,246,0.4))',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          },
        }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 2,
          }}
        >
          UrbanBike
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mt: 3, maxWidth: 600, mx: 'auto' }}
        >
          Movilidad inteligente. Tecnología y ciudad conectadas en una sola experiencia.
        </Typography>
      </Box>
    </Box>
  );
};