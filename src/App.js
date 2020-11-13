import './App.css';
import TodoList from './TodoList';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar><Toolbar><Typography>Hello!</Typography></Toolbar></AppBar>
      <TodoList />
    </div>
  );
}

export default App;
