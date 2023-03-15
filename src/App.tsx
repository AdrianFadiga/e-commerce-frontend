import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
