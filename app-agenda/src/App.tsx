import React, { useState } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Box,
  Typography,
  Paper
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [compromissos, setCompromissos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Minha Agenda
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
              {/* Aqui virá o conteúdo da agenda */}
            </Paper>
          </Box>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App; 