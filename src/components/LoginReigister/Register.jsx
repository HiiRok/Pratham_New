import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Link, makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(3),
//     backgroundColor: theme.palette.common.background,
//   },
//   form: {
//     width: '300px',
//     margin: 'auto',
//   },
//   input: {
//     border: '1px solid #ccc',
//     padding: theme.spacing(1),
//     marginBottom: theme.spacing(2),
//   },
//   submit: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     padding: theme.spacing(1, 2),
//     marginTop: theme.spacing(2),
//   },
// }));

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <Grid container spacing={0} justify='center' direction='row'>
      <Grid item>
        <Paper variant='elevation' elevation={2} className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label='Username'
              type='username'
              className={classes.input}
              fullWidth
              name='username'
              variant='outlined'
              value={username}
              onChange={handleChange}
              required
              autoFocus
            />
            <TextField
              label='Email'
              type='email'
              className={classes.input}
              fullWidth
              name='email'
              variant='outlined'
              value={email}
              onChange={handleChange}
              required
              autoFocus
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
            />
            <TextField
              label='Confirm Password'
              type='password'
              className={classes.input}
              fullWidth
              name='confirmPassword'
              variant='outlined'
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <Button
              variant='contained'
              className={classes.submit}
              type='submit'
            >
              Register
            </Button>
          </form>
          <Link href='#' variant='body2'>
            Already have an account? Login
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
