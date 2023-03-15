import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
