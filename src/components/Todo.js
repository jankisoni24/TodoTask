import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import { Delete, Build } from "@mui/icons-material";
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions/todoActions';

const styles = {
    Icon: {
      marginLeft: "auto"
    },
    Paper: {
      margin: "auto",
      padding: 10,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      width: 500
    }
  };

export default function Todo( props ) {
    const { item } = props;
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      console.log(id);
      dispatch(deleteTodo(id));
    }
    const handleEdit = (item) => {
      console.log(item);
      item.status = 'editing';
      dispatch(editTodo(item));
    }
    return(
        <Grid
        xs={12}
        item
        key={item.id}
      >
        <Paper elevation={2} style={styles.Paper}>
          <Box style={{ width: '100px', textAlign: 'text-left' }}><span style={styles.Todo}>{item.title}</span></Box>
          {/* <Box style={{ width: '200px', textAlign: 'text-left' }}><span style={{marginLeft: '50px'}}>{item.description}</span></Box> */}
          <Box style={{ width: '100px', textAlign: 'text-left' }}><span style={{marginLeft: '50px'}}>{item.todo_status}</span></Box>
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            onClick={() => {handleEdit(item)}}
          >
            <Build fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={() => {handleDelete(item.id)}}
          >
            <Delete fontSize="small" color="red" />
          </IconButton>
        </Paper>
      </Grid>
    );
}