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
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Box style={{ overflowX: 'hidden' }}>
        <DrawerAppBar />
        <div id="home">
          <Cover />
        </div>
        <Services />
        <div id="presentation">
          <Presentation />
        </div>
        <AnimatedImages />
        <ParallaxComponent />   
        <div id="subscribe">
          <Subscribe />
        </div>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
