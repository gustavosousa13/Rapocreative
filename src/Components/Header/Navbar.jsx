  import * as React from 'react';
  import PropTypes from 'prop-types';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Divider from '@mui/material/Divider';
  import Drawer from '@mui/material/Drawer';
  import IconButton from '@mui/material/IconButton';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemText from '@mui/material/ListItemText';
  import MenuIcon from '@mui/icons-material/Menu';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';

  const drawerWidth = 240;
  const navItems = ['Home', 'Sobre nós', 'Contato'];

  function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          RapóCreative
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{  backgroundColor:'#F2F1E4', height: { xs: 'auto', sm: '90px' }, boxShadow: 'none', padding: 0 }}
        >
          <Box
            sx={{
              borderBottom: '1px solid black',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              overflow: 'hidden' 
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: { xs: 'auto', sm: '100%' },
                borderBottom: '1px solid black',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
              }}
            >
          <Box component="img"
                src="assets/logo-rapo2.png"
                alt="Logo"
                sx={{ width: '200px', 
                  height: 'auto',
                  alignItems:'center',
                  padding:'10px'
                }} 
            />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' }, margin: 0, padding: 0, color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '50%',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
              }}
            >
              <Toolbar
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: 0,
                  padding: 0,
                  boxSizing: 'border-box',
                }}
              >
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: 'black', margin: 0, padding: 2 }}>
                    {item}
                  </Button>
                ))}
              </Toolbar>
            </Box>
          </Box>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 0, flexGrow: 1 }}>
          <Toolbar />
          <Typography>
          
          </Typography>
        </Box>
      </Box>
    );
  }

  DrawerAppBar.propTypes = {
    window: PropTypes.func,
  };

  export default DrawerAppBar;
