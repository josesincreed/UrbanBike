import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: 1,
            background: 'linear-gradient(90deg, #00E5FF, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          UrbanBike
        </Typography>

        <Box>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              color: location.pathname === '/' ? '#00E5FF' : 'white',
            }}
          >
            Estaciones
          </Button>

          <Button
            component={RouterLink}
            to="/reservas"
            sx={{
              color:
                location.pathname === '/reservas'
                  ? '#00E5FF'
                  : 'white',
            }}
          >
            Reservas
          </Button>

          <Button
            component={RouterLink}
            to="/admin"
            sx={{
              color:
                location.pathname === '/admin'
                  ? '#00E5FF'
                  : 'white',
            }}
          >
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};