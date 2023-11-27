import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserProvider';
const Login = () => {
  const av = { backgroundColor: '#b27764' };
  const te = { margin: '10px 0' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'};
  const btn = { margin: '8px 0' };

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loggedIn, loggedOut } = useContext(UserContext);

  const getusers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getusers();
  },[]);
  
  const navigate=useNavigate();
  const onlog = async() => {
    const user = await users.find(user => user.username === username && user.password === password);
    if (user) {
      alert('Login successful!');
      loggedIn();
      navigate('/');
    } else {
      alert('Invalid credentials');
      loggedOut();
    }
  };

  return (
    <div style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp9352738.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Paper elevation={10} style={{ padding: '30px', width: '45vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar style={av}>
            <LockIcon />
          </Avatar>
          <h2 style={{ paddingBottom: '20px' }}>Login</h2>
          <form style={te}>
            <TextField label="Username" placeholder="Enter Username" onChange={(e)=> setUsername(e.target.value)} style={{ paddingBottom: '20px' }} required />
            <TextField label="Password" placeholder="Enter Password" type="password" onChange={(e) => setPassword(e.target.value)} style={{ paddingBottom: '20px' }} required />
            <p fullwidth></p>
            <Button type="submit" variant="contained" color="primary" style={btn} onClick={onlog}>
              Login
            </Button>
          </form>
          <Typography>
            <Link href="#">Forget Password?</Link>
          </Typography>
          <Typography>
            Do you have an account?<Link onClick={()=>navigate('/signup')}>Sign Up?</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
