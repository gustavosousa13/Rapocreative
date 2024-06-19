import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as ScrollLink } from 'react-router-hash-link';

const drawerWidth = 240;
const navItems = ['Home', 'Presentation', 'Subscribe'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (item) => {
    console.log(`Clicked on ${item}`);
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
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item)}>
              <ScrollLink smooth to={`#${item.toLowerCase()}`} duration={500}> 
                <ListItemText primary={item} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: '#F2F1E4',
          height: { xs: 'auto', sm: '90px' },
          boxShadow: 'none',
          padding: 0,
          borderBottom: '1px solid black',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0 }}>
          <Box
            component="img"
            src="assets/logo-rapo2.png"
            alt="Logo"
            sx={{ width: '200px', padding: '10px' }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }} onClick={() => handleClick(item)}>
                <ScrollLink smooth to={`#${item.toLowerCase()}`} duration={500}>
                  {item}
                </ScrollLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
