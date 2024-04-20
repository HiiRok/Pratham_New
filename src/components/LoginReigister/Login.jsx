import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Link, Fade, makeStyles } from '@material-ui/core';



const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    if (event.target.email === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
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
            Login in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
            <Button
              variant='contained'
              className={classes.submit}
              type='submit'
            >
              Submit
            </Button>
          </form>
          <Link href='#' variant='body2'>
            Forgot Password?
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
