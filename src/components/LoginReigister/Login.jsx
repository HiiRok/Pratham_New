// src/components/LoginReigister/Login.js
import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Paper, Typography, Link, CircularProgress, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { API_BASE_URL } from '../../config';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    width: '400px',
    marginTop: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'green', // Change to green on hover
    },
  },
  errorText: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    fetch(`${API_BASE_URL}/api/user/login`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: username,
        password: password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      setLoading(false);
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(err => Promise.reject(err));
      }
    })
    .then(data => {
      if (data.token) {
        login(data.token);
  			localStorage.setItem('prasthan_yatna_jwt', data.token);
        navigate("/");
      }
    })
    .catch(error => {
      setError('Login failed. Please check your credentials and try again.');
    });
  };

  return (
    <Grid container spacing={0} justifyContent='center' direction='row'>
      <Grid item>
        <Paper variant='elevation' elevation={2} className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label='Email'
              type='email'
              className={classes.input}
              fullWidth
              name='username'
              variant='outlined'
              value={username}
              onChange={handleChange}
              required
              autoFocus
              error={!!error}
            />
            <TextField
              label='Password'
              type='password'
              className={classes.input}
              fullWidth
              name='password'
              variant='outlined'
              value={password}
              onChange={handleChange}
              required
              error={!!error}
            />
            {error && (
              <Typography variant='body2' className={classes.errorText}>
                {error}
              </Typography>
            )}
            <Button
              variant='contained'
              className={classes.submit}
              type='submit'
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </form>
          <Link href='/forgot-password' variant='body2'>
            Forgot Password?
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
