import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ToDoList from './pages/ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/edit-data:anak" element={<ToDoList isEdit />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
