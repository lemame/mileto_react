import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../public/image/LogosGrande_Blue.png';
import { login } from '../../services/Login';
function initialState() {
  return {
    user: '',
    password: '',
  };
}
function Login() {
  const theme = createTheme();

  const [values, setValues] = useState(initialState);

  async function handleLogin() {
    const response = await login({
      email: 'jose.flavio@afs.com.br',
      password: 'Afs@2021',
    });
    console.log(response);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            <img src={Logo} />
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // style={{ backgroundColor: 'red' }}
            onClick={() => handleLogin()}
          >
            Entrar aq
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
