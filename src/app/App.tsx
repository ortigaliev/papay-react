
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../css/App.css';
import { Box, Stack, Button} from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';

function App() {
  return (
  <Container>
    <Stack flexDirection={'column'}>
      <Box sx={{my: 4}}>
        <Typography variant='h1' component={'h1'} gutterBottom>
          Create React app on TS with Redux
        </Typography>
      </Box>
      <Box>
        <RippleBadge badgeContent={4}>
        <Button variant="contained">Contained</Button>
        </RippleBadge>
      </Box>

    </Stack>

  </Container>
  );
}

export default App;
