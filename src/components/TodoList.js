import React, {useState, Fragment, useEffect} from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from './List';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import { addTodoError, fetchTodoData } from '../redux/actions/todoActions';

const styles = {
    Paper: {
      padding: 20,
      margin: "auto",
      marginTop: 30,
      textAlign: "center",
      width: 500
    }
};

export default function TodoList() {
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.todoData);
    var addTodoErrorMsg = todoData.addTodoError;
    console.log('todoData');
    console.log(addTodoErrorMsg);
    var data = [];
    var listData = localStorage.getItem('todoData');

    useEffect(() => {
        if(localStorage.getItem('todoData') != null) {
            data = JSON.parse(atob(localStorage.getItem('todoData')));
        }
        dispatch(fetchTodoData(data));
    },[listData])

    const alertMsg = addTodoErrorMsg && <Alert severity='error'  onClose={() => dispatch(addTodoError(''))} > {addTodoErrorMsg} </Alert>;
    return (
        <div>
            <Header />
            <Fragment>
                <Grid container spacing={0} style={{marginTop: '50px'}}>
                    <Grid item xs={12}>
                        <Paper style={styles.Paper}>
                        {alertMsg}
                        <AddTodo />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} style={styles.Paper}>
                        <List/>
                    </Grid>
                </Grid>
            </Fragment>
        </div>
    )
}