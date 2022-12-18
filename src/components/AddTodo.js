import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { addTodoError, addTodo } from '../redux/actions/todoActions';
import { useDispatch } from 'react-redux';

export default function AddTodo() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('Pending');
    const dispatch = useDispatch();

    const randomString = (length, chars) => {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    const handleSubmit = async (event) => {
        //setShowAlert(null);
        event.preventDefault();
        if(title != '' || desc != '') {
            var todoFormData = {
                id: randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                title: title,
                description: desc,
                todo_status: status,
                status: 'active'
            };
            dispatch(addTodo(todoFormData));
        } else {
            dispatch(addTodoError('Please add all details to add todo'));
        }
      };

      const handleChange = (event) => {
        setStatus(event.target.value);
      };

    return(
        <div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoFocus
                            fullWidth
                            id="title"
                            label="title"
                            name="title"
                            autoComplete="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {/* <Typography variant="body2" style={{color:"red"}} >
                        {errors.username
                            ? errors.username
                            : ""}
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="description"
                            label="description"
                            name="description"
                            autoComplete="title"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        {/* <Typography variant="body2" style={{color:"red"}} >
                        {errors.username
                            ? errors.username
                            : ""}
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-helper-label">Status</InputLabel> */}
                            <Select
                                //labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={status}
                                // label="AStatusge"
                                onChange={handleChange}
                            >
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Typography variant="body2" style={{color:"red"}} >
                        {errors.username
                            ? errors.username
                            : ""}
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2 }}
                    >
                        Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {/* <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                    <Input
                        placeholder="Title"
                        inputProps={{
                            "aria-label": "Description"
                        }}
                        style={{ width: "90%" }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        inputProps={{
                            "aria-label": "Description"
                        }}
                        style={{ width: "90%" }}
                        onChange={(e) => setDeisc(e.target.value)}
                    />

                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "10%" }}
                    >
                    Add
                    </Button>
            </form> */}
        </div>
    )

}