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
import { useDispatch } from 'react-redux';
import { addTodoError, editTodo } from '../redux/actions/todoActions';

export default function EditTodo( props ) {
    const { item } = props;
    const [title, setTitle] = useState(item.title);
    const [desc, setDesc] = useState(item.description);
    const [status, setStatus] = useState(item.todo_status);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        //setShowAlert(null);
        event.preventDefault();
        if(title != '' || desc != '') {
            var todoFormData = {
                id: item.id,
                title: title,
                description: desc,
                todo_status: status,
                status: 'active'
            };
            dispatch(editTodo(todoFormData));
        } else {
            dispatch(addTodoError('Please add all details to edit todo'));
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
                            //label="title"
                            name="title"
                            autoComplete="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="description"
                            //label="description"
                            name="description"
                            autoComplete="title"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
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
                    </Grid>
                    <Grid item xs={12}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2 }}
                    >
                        Update
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )

}