import { Box } from '@mui/material';
import { Header } from './shared/components/Header';
import { Hero } from './shared/components/Hero';
import { Footer } from './shared/components/Footer';
import { StationList } from './features/stations/components/StationList';


function App() {
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
      <StationList />
      <Footer />
    </Box>
  );
}

export default App;