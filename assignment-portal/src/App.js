import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Container, Paper, Box, CssBaseline } from '@mui/material';
import { Home, Assignment, Assessment, Notifications, Person, Help, ExitToApp } from '@mui/icons-material';
import SubmitAssignment from './SubmitAssignment';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('submit-assignment');
  const [user] = useState({ name: 'Student Name', profilePic: 'https://via.placeholder.com/150' });

  const renderContent = () => {
    switch (selectedSection) {
      case 'submit-assignment':
        return <SubmitAssignment />;
      default:
        return <SubmitAssignment />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Assignment Submission Portal
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Welcome, {user.name}
          </Typography>
          <Avatar src={user.profilePic} alt={user.name} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={() => setSelectedSection('submit-assignment')}>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Submit Assignment" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Grades/Results" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="Help/Support" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Paper sx={{ p: 2 }}>
            {renderContent()}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default App;
