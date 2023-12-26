'use client';

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'PersianFont',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'PersianFont';
          font-style: normal;
          font-weight: 400;
          src: url('/font/Dirooz-FD.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const SignUp = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <Box className='flex flex-col items-center'>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', variant: 'rounded' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h4' variant='h4'>
            ثبت نام
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            className='mt-3'
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  label='نام'
                  autoFocus
                  className='text-right'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='family-name'
                  required
                  fullWidth
                  id='lastName'
                  label='نام خانوادگی'
                  name='lastName'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='آدرس ایمیل'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='رمز عبور'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='مایل به ساییده شدن مغزم هستم .'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              ثبت نام
            </Button>
            <Grid container className='flex justify-center'>
              <Grid item>
                <Link href='#' variant='body2'>
                  اکانت دارید؟ ورود
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
