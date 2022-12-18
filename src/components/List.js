import EditTodo from "./EditTodo";
import Todo from "./Todo";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const styles = {
    Paper: {
      padding: 20,
      margin: "auto",
      marginTop: 30,
      textAlign: "center",
      width: 500
    }
};

export default function List() {
    const todoData = useSelector((state) => state.todoData.todoData);
    const todoList = todoData.length > 0 && todoData.map((item) => {
        if(item.status == 'active') {
            return <Todo item={item} />
        } else {
            return <Grid item xs={12}>
                <Paper style={styles.Paper}>
                    <EditTodo item={item}/>
                </Paper>
            </Grid>
        }
    });
    return(
        <div>
            {todoList}
        </div>
    );
}