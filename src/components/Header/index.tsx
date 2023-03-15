import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex
      as="header"
      color="white"
      align="center"
      wrap="wrap"
      justify="space-between"
      w="100%"
      py={6}
      px={10}
      bg="black"
    >
      <Container centerContent>
        <Box fontWeight="bold">Metcon Cross</Box>
      </Container>
      <HStack direction="row" spacing={4}>
        <Link to="/home">Página inicial</Link>
        <Link to="/about">Sobre nós</Link>
        <Link to="/contact">Contato</Link>
      </HStack>
    </Flex>
  );
};

export default Header;