import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const SubmitAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && file) {
      setStatus('Assignment submitted successfully!');
    } else {
      setStatus('Please fill all the fields and upload a file.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" gutterBottom>
        Submit Assignment
      </Typography>
      <TextField
        label="Assignment Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description/Instructions"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={handleFileChange} required />
      </Button>
      {file && (
        <Typography variant="body2">
          {file.name}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        Submit Assignment
      </Button>
      {status && (
        <Typography variant="body1" color="success">
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default SubmitAssignment;
