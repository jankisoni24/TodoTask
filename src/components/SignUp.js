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
import { userSignUp } from '../redux/actions/userActions';

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

export default function SignUp() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(null);

  const dispatch = useDispatch();

  const [fields, errors, form] = useFormInputValidation({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirm_password: ""
  }, {
    username: "required",
    fullname: "required",
    email: "required|email",
    password: "required|confirmed",
    password_confirmation: "required|same:password",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = await form.validate(event);
    if (isValid) {
      var formdata = {
        username: fields.username, 
        fullname: fields.fullname, 
        email: fields.email,
        password: fields.password,
        is_active: true
      };
      dispatch(userSignUp(formdata));
      // console.log(formdata);
      // localStorage.setItem('userData', btoa(JSON.stringify(formdata)));
      navigate("/todo_list");
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                  autoComplete="given-name"
                  name="fullname"
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  value={fields.fullname}
                  onChange={form.handleChangeEvent}
                />
                <Typography variant="body2" style={{color:"red"}} >
                  {errors.fullname
                    ? errors.fullname
                    : ""}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={form.handleChangeEvent}
                />
                <Typography variant="body2" style={{color:"red"}} >
                  {errors.email
                    ? errors.email
                    : ""}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={fields.password}
                  onChange={form.handleChangeEvent}
                />
                <Typography variant="body2" style={{color:"red"}} >
                  {errors.password
                    ? errors.password
                    : ""}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  value={fields.password_confirmation}
                  onChange={form.handleChangeEvent}
                />
                <Typography variant="body2" style={{color:"red"}} >
                  {errors.password_confirmation
                    ? errors.password_confirmation
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={'/'} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}