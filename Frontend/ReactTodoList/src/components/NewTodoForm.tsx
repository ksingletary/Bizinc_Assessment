import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

// props interface for new todo
interface NewTodoFormProps {
    addTodo: (todo: { text: string; completed: boolean, id: number }) => void;
  }

const NewTodoForm = ({ addTodo }: NewTodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  // handle submit with type safety
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ text: inputValue, completed: false, id: Date.now() });
    setInputValue('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1 }}>
      <TextField
        variant="outlined"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default NewTodoForm;