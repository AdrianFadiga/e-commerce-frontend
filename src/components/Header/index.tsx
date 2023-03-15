import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex
      backgroundColor="black"
      color="white"
      as="header"
      h="8vh"
      align="center"
      justify="space-between"
      py={3}
      px={5}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container centerContent>
        <Box fontWeight="bold">Metcon Cross</Box>
      </Container>
      <Stack direction="row" spacing={4}>
        <Link to="/home">Página inicial</Link>
        <Link to="/about">Sobre nós</Link>
        <Link to="/contact">Contato</Link>
      </Stack>
    </Flex>
  );
};

export default Header;