import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/actions/userActions';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    var userData = JSON.parse(atob(localStorage.getItem('userData')));
    if(Object.keys(userData).length > 0) {
      var formdata = {
        username: userData.username, 
        fullname: userData.fullname, 
        email: userData.email,
        password: userData.password,
        is_active: false
      };
      console.log(formdata);
      dispatch(userLogout(formdata));
      //localStorage.setItem('userData', btoa(JSON.stringify(formdata)));
      navigate("/");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}x
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}