'use client';

import React, { useEffect, useState } from 'react';
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
import { ThemeProvider } from '@mui/material/styles';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import useApi from '@/hooks/useApi';
import { BaseResponse, UserPersonalInfo } from '@/models/shared.models';
import theme from './../../themes/theme';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxhooks';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [processing, setProcessing] = useState(false);
  const router = useRouter();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { fetchData } = useApi<BaseResponse<UserPersonalInfo[]>>();

  useEffect(() => {
    fetchData('SkyDiveEventStatuses', 'get');
  }, [fetchData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
    setSubmitted(true);

    fetchData(`/Users/CheckUserExistence`),
      () => {
        router.push('/path-to-redirect');
      };
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      allowExtraEmails: data.get('allowExtraEmails'),
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setProcessing(false);
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={Boolean}
                      color='primary'
                      name='allowExtraEmails'
                    />
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
              {processing ? (
                <CircularProgress size={25} color='inherit' />
              ) : (
                <Typography>ثبت نام</Typography>
              )}
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
        <Snackbar open={processing} autoHideDuration={6000}>
          <Alert severity='success' sx={{ width: '100%' }}>
            ورود موفقیت آمیز !
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
