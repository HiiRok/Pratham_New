import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { AuthContext } from '../../AuthProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 600, 
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'green', // Change to green on hover
    },
  },
  successMessage: {
    color: 'green',
    marginTop: theme.spacing(2),
  },
  errorMessage: {
    color: 'red',
    marginTop: theme.spacing(2),
  },
}));

const PasswordChangeForm = () => {
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { resetPassword } = useContext(AuthContext);
  const classes = useStyles();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await resetPassword(password);
      setSuccessMessage('Password changed successfully.');
    } catch (error) {
      setErrorMessage('Failed to change password. Please try again.');
    }

    setPassword('');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          Change Password
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                label="New Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                type="submit"
              >
                Change Password
              </Button>
            </Grid>
            {successMessage && (
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.successMessage}>
                  {successMessage}
                </Typography>
              </Grid>
            )}
            {errorMessage && (
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.errorMessage}>
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default PasswordChangeForm;
