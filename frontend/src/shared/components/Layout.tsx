import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from './Header';
import { Hero } from './Hero';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 20% 30%, #1F2937 0%, #0B0F19 40%, #000000 100%)',
      }}
    >
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </Box>
  );
};