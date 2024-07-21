import './App.css';
import DrawerAppBar from './Components/Header/Navbar';
import Cover from './Components/Header/Cover1';
import { Box } from '@mui/material';
import Presentation from './Components/Body/Presentation';
import Services from './Components/Body/Services';
import ParallaxComponent from './Components/Body/Port';
import AnimatedImages from './Components/Body/Customers';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Components/Body/Contact';

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
        <div>
          <Contact />
        </div>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
