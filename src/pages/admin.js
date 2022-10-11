import React from "react";
import PropTypes from 'prop-types';
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Avatar, AvatarGroup, Divider, Drawer, Grid, Typography, Badge, Container, Box, Paper, Tab, Tabs,CssBaseline, Toolbar, List, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton } from "@mui/material";
// import { Box } from "@mui/system";
import { deepPurple } from '@mui/material/colors';
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

import { Dashboard, PlaylistAdd, Podcasts, PostAdd, WebRounded, Mail, Menu, ArrowDropDown, KeyboardDoubleArrowDown, KeyboardArrowDown } from '@mui/icons-material';

const drawerList = [
    { icon: <Dashboard />, label: 'DashBoard' },
    { icon: <WebRounded />, label: 'Blog Posts'},
    { icon: <Podcasts />, label: 'Podcasts' },
    { icon: <PostAdd />, label: 'Add a new Blog Post' },
    { icon: <PlaylistAdd />, label: 'Add a new Podcast' },
    { icon: <Mail />, label: 'Hosting' },
  ];

const drawerWidth = 240;

const Admin = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

// const Admin = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const drawer = (
    <div>
      <Toolbar>
      <Typography variant="h6" component="div">
            Admin Panel
          </Typography>
      </Toolbar>
      <Divider />
      <List>
        {drawerList.map((text, index) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
    
  return (

        <div sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
        }}>
            <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <Menu />
        </IconButton>
        <Grid sx={{borderBottom: 1, p:1.5}} container columns={23}>
            <Grid sx={{}} item xs={20}>
            </Grid>
            <Grid sx={{borderLeft:1, pl:1}} item xs={1}> 
                <Badge variant="dot" color="primary">
                    <Mail color="action" />
                </Badge>
            </Grid>
            {/* <Divider orientation="vertical" /> */}
            <Grid sx={{ display: 'flex', borderLeft:1, pl:1}} item xs={2}> 
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                <Typography variant="body2" sx={{m: '8px', textAlign: 'right'}}>Admin</Typography>
                <KeyboardArrowDown />
            </Grid>
        </Grid>
        </Toolbar>
        </Box>
        <Box
        component="nav"
        sx={{flexShrink: { sm: 0 } }}
        // aria-label="drawer folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ bgcolor: 'info.main', flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
          <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
      </Box>
        </div>
);
};
Admin.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Admin;