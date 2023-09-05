import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Container, Grid, Typography } from '@mui/material';

const UserForm = () => {
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    city: '',
    state: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details to local storage or an API if needed
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    history.push('/user-info');
  };

  return (
    <Container maxWidth="sm" >
      <Typography variant="h4" align="center" style={{margin:"40px"}} gutterBottom>
        <strong>Please Enter Your Details</strong>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={userDetails.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={userDetails.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="State"
              name="state"
              value={userDetails.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={userDetails.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid container justifyContent="center" style={{margin:"20px"}}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
