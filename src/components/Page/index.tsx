import { Box, Container } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box backgroundColor='tomato' w='100%' h='100vh'>
      <Header />
      <Navbar />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
};

export default Page;