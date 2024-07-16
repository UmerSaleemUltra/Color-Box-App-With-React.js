import React from 'react';
import './App.css';
import ColorBox from './Components/Colorbox';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Typography sx={{color: 'white', marginTop: '10px'}} variant="h2" component="h1" gutterBottom>
          Color Box App
        </Typography>
        <ColorBox />
      </header>
    </Container>
  );
}

export default App;
