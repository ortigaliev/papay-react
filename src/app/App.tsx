
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../css/App.css';
import { Box, Stack, Button} from '@mui/material';

function App() {
  return (
  <Container maxWidth={'sm'}>
    <Stack flexDirection={'column'}>
      <Box sx={{my: 4}}>
        <Typography variant='h1' component={'h1'} gutterBottom>
          Create React app on TS with Redux
        </Typography>
      </Box>
      <Button variant="contained">Contained</Button>
    </Stack>

  </Container>
  );
}

export default App;
