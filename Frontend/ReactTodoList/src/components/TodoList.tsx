import { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NewTodoForm from './NewTodoForm'; 

// interface for the structure of each todo
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // add todo
  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  // remove todo
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // toggle for completing
  const toggleCompletion = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <Box>
      <NewTodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => toggleCompletion(todo.id)}
            />
            {/* material ui */}
            <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;