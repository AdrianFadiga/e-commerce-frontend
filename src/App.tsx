import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';

function App() {

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
