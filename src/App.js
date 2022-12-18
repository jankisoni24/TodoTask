import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/SignUp';
import TodoList from './components/TodoList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />}></Route>
          <Route exact path="/signup" element={<SignUpForm />}></Route>
          <Route exact path="/todo_list" element={<TodoList />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
