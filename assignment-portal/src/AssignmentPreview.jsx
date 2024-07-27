import React, { useEffect } from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const AssignmentPreview = ({ number, title, description, file, deadline, marks, onAddAssignment }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Clean up URL object when file changes or component unmounts
    return () => {
      if (file && file instanceof File) {
        URL.revokeObjectURL(URL.createObjectURL(file));
      }
    };
  }, [file]);

  const renderFilePreview = () => {
    if (!file) return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        No file uploaded
      </Typography>
    );

    const fileURL = URL.createObjectURL(file);

    if (file.type.startsWith('image/')) {
      return (
        <CardMedia
          component="img"
          alt={file.name}
          image={fileURL}
          sx={{ maxHeight: isSmallScreen ? 200 : 300, objectFit: 'contain', borderRadius: 1 }}
        />
      );
    }

    if (file.type === 'application/pdf') {
      return (
        <iframe
          src={fileURL}
          width="100%"
          height={isSmallScreen ? 200 : 300}
          style={{ border: 'none', borderRadius: 1 }}
          title="PDF Preview"
        />
      );
    }

    return (
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Unsupported file type: {file.type}
      </Typography>
    );
  };

  const handleDownload = () => {
    const fileURL = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(fileURL);
  };

  return (
    <Card sx={{ maxWidth: '100%', margin: 'auto', mt: 3, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        {/* Heading Row */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6" component="div">
              Assignment
            </Typography>
          </Grid>
        </Grid>

        {/* Assignment Data Row */}
        <Grid container spacing={2}>
          {/* Assignment Number Column */}
          <Grid item xs={12} sm={2}>
            <Typography variant="body1">
              {number || 'Assignment #'}
            </Typography>
          </Grid>

          {/* Assignment Preview Column */}
          <Grid item xs={12} sm={4}>
            {renderFilePreview()}
          </Grid>

          {/* Marks Column */}
          <Grid item xs={12} sm={2}>
            <Box
              sx={{
                backgroundColor: 'gray',
                color: 'white',
                padding: 1,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                fontSize: '0.8rem',
                textAlign: 'center',
              }}
            >
              Marks: {marks || '0'}
            </Box>
          </Grid>

          {/* Deadline Column */}
          <Grid item xs={12} sm={2}>
            <Box
              sx={{
                backgroundColor: 'error.main',
                color: 'white',
                padding: 1,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                fontSize: '0.7rem',
                textAlign: 'center',
              }}
            >
              Deadline:<br /> {deadline || '2024-08-01'}
            </Box>
          </Grid>

          {/* Add Assignment Column */}
          <Grid item xs={12} sm={2}>
            <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={onAddAssignment}
                sx={{
                  mb: isSmallScreen ? 1 : 0,
                  mr: isSmallScreen ? 0 : 1,
                  color: 'white',
                  padding: 1,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  fontSize: '0.7rem',
                  textAlign: 'center',
                }}
              >
                Add Assignment
              </Button>
              {file && (
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DownloadIcon />}
                  onClick={handleDownload}
                  sx={{ ml: isSmallScreen ? 0 : 1 }}
                >
                  Download
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AssignmentPreview;