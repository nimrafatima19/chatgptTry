import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar,
  CssBaseline, IconButton, Box, Hidden, Container, Paper, MenuItem, Select, FormControl, InputLabel, Button
} from '@mui/material';
import { Menu, Book, Person, ExitToApp } from '@mui/icons-material';

const drawerWidth = 240;

const StudentDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [course, setCourse] = useState('');
  const [session, setSession] = useState('');
  const [batch, setBatch] = useState('');
  const [teacher, setTeacher] = useState('');
  const [user] = useState({ name: 'Student Name', profilePic: 'https://via.placeholder.com/150' });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Select Course & Session" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const renderContent = () => {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="course-label">Select Course</InputLabel>
          <Select
            labelId="course-label"
            value={course}
            label="Select Course"
            onChange={(e) => setCourse(e.target.value)}
          >
            <MenuItem value={1}>Course 1</MenuItem>
            <MenuItem value={2}>Course 2</MenuItem>
            <MenuItem value={3}>Course 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="session-label">Select Session</InputLabel>
          <Select
            labelId="session-label"
            value={session}
            label="Select Session"
            onChange={(e) => setSession(e.target.value)}
          >
            <MenuItem value={1}>Session 1</MenuItem>
            <MenuItem value={2}>Session 2</MenuItem>
            <MenuItem value={3}>Session 3</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, alignItems: 'center' }}>
          <FormControl margin="normal" sx={{ minWidth: '30%' }}>
            <InputLabel id="batch-label">Select Batch</InputLabel>
            <Select
              labelId="batch-label"
              value={batch}
              label="Select Batch"
              onChange={(e) => setBatch(e.target.value)}
            >
              <MenuItem value={1}>Batch 1</MenuItem>
              <MenuItem value={2}>Batch 2</MenuItem>
              <MenuItem value={3}>Batch 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl margin="normal" sx={{ minWidth: '30%' }}>
            <InputLabel id="teacher-label">Select Teacher</InputLabel>
            <Select
              labelId="teacher-label"
              value={teacher}
              label="Select Teacher"
              onChange={(e) => setTeacher(e.target.value)}
            >
              <MenuItem value={1}>Teacher 1</MenuItem>
              <MenuItem value={2}>Teacher 2</MenuItem>
              <MenuItem value={3}>Teacher 3</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mt: '8px' }}> {/* Adjust the margin to match the dropdowns */}
            <Button
              variant="contained"
              color="primary"
              sx={{ height: '56px' }}
              onClick={() => alert('View Assignments')}
            >
              View Assignments
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Assignment Submission Portal
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Welcome, {user.name}
          </Typography>
          <Avatar src={user.profilePic} alt={user.name} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
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

export default StudentDashboard;
