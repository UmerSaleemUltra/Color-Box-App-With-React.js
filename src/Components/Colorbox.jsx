import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Paper, Typography } from '@mui/material';

const ColorBox = () => {
  const [color, setColor] = useState('#ffffff');
  const [colorInput, setColorInput] = useState('');

  const handleColorInputChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleApplyColor = () => {
    setColor(colorInput);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <Box
      className="d-flex flex-column align-items-center"
      sx={{ padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px', marginTop:'5%' }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: '#000' }}>
          {color}
        </Typography>
      </Paper>
      <TextField
        label="Enter color code or name"
        variant="outlined"
        value={colorInput}
        onChange={handleColorInputChange}
        className="mb-3"
        sx={{ width: '200px' }}
      />
      <Button variant="contained" color="primary" onClick={handleApplyColor}>
        Apply
      </Button>
    </Box>
  );
};

export default ColorBox;
