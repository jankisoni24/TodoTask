import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useFormInputValidation } from "react-form-input-validation";
import { useDispatch } from 'react-redux';
import { userSignIn } from '../redux/actions/userActions';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(null);

  const [fields, errors, form] = useFormInputValidation({
    username: "",
    password: ""
  }, {
    username: "required",
    password: "required"
  });

  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.userData.userData);
  // console.log('userData redux');
  // console.log(userData);

  const handleSubmit = async (event) => {
    setShowAlert(null);
    event.preventDefault();
    const isValid = await form.validate(event);
    if (isValid) {
      if(localStorage.getItem('userData') != null) {
      //if(Object.keys(userData).length > 0) {
        var userData = JSON.parse(atob(localStorage.getItem('userData')));
        console.log(userData);
        if(userData.username == fields.username && userData.password == fields.password) {
          var formdata = {
            username: userData.username, 
            fullname: userData.fullname, 
            email: fields.email,
            password: fields.password,
            is_active: true
          };
          dispatch(userSignIn(formdata));
          // console.log(formdata);
          // localStorage.setItem('userData', btoa(JSON.stringify(formdata)));
          navigate("/todo_list");
        } else {
          setShowAlert('Invalid credentials');
        }
      } else {
        setShowAlert('Invalid credentials');
      }
    }
  };
  const alertMsg = showAlert && <Alert severity='error'  onClose={() => setShowAlert(null)} > { showAlert } </Alert>;

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
          {alertMsg}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={fields.username}
                    onChange={form.handleChangeEvent}
                  />
                  <Typography variant="body2" style={{color:"red"}} >
                        {errors.username
                          ? errors.username
                          : ""}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={fields.password}
                    onChange={form.handleChangeEvent}
                  />
                  <Typography variant="body2" style={{color:"red"}} >
                        {errors.password
                          ? errors.password
                          : ""}
                  </Typography>
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href={'signup'} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}