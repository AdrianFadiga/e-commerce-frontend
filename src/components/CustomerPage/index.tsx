import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../Header';

interface CustomerPageProps {
  children: ReactNode;
}

const CustomerPage: React.FC<CustomerPageProps> = ({ children }) => {
  return (
    <Box backgroundColor='tomato' w='100%' minHeight='100vh' height='100%'>
      <Header />
      {children}
    </Box>
  );
};

export default CustomerPage;