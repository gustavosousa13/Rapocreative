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
        <div id="início">
          <Cover />
        </div>
        <div id="serviços">
        <Services />
        </div>
        <div id="quem-somos">
          <Presentation />
        </div>
        <AnimatedImages />
        <div id="portfólio">
        <ParallaxComponent /> 
        </div>  
        <div id="contato">
          <Subscribe />
        </div>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
