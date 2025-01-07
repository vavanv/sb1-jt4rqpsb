import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon, Dashboard, Event, Person, Login, HowToReg, QuestionAnswer, Group } from '@mui/icons-material';
import { RootState } from '../store';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Schedule', icon: <Event />, path: '/schedule' },
    { text: 'Speakers', icon: <Group />, path: '/speakers' },
    { text: 'Q&A', icon: <QuestionAnswer />, path: '/qa' },
    ...(user ? [
      { text: 'Profile', icon: <Person />, path: '/profile' }
    ] : [
      { text: 'Login', icon: <Login />, path: '/login' },
      { text: 'Register', icon: <HowToReg />, path: '/register' }
    ])
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Conference App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          mt: '64px' // Height of AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}