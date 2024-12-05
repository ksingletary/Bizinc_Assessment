import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import TodoList from './components/TodoList'; 

function App() {
  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Todo List
        </Typography>
        <TodoList />
      </Container>
    </React.Fragment>
  );
}

export default App;