import './App.css';
import DrawerAppBar from './Components/Header/Navbar';
import Cover from './Components/Header/Cover1';
import { Box } from '@mui/material';
import Presentation from './Components/Body/Presentation';
import Services from './Components/Body/Services';
import ParallaxComponent from './Components/Body/Port';
import Subscribe from './Components/Body/Subscribe';
import AnimatedImages from './Components/Body/Customers';
import Footer from './Components/Footer/Footer';

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
