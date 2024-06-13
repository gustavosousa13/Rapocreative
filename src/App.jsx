import './App.css';
import DrawerAppBar from './Header/Navbar';
import Cover from './Header/Cover1';
import { Box } from '@mui/material';
import Presentation from './Body/Presentation';
import Services from './Body/Services';
import ParallaxComponent from './Body/Port';
import Subscribe from './Body/Subscribe';
import AnimatedImages from './Body/Customers';
import Footer from './Footer/Footer';

function App() {
  return (
    <Box style={{ overflowX: 'hidden' }}>
      <DrawerAppBar />
      <Cover />
      <Presentation />
      <Services />
      <AnimatedImages />
      <ParallaxComponent/>
      <Subscribe />
      <Footer />
    </Box>
  );
}

export default App;
