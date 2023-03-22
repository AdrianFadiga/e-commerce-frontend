import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IUserContext, UserContext } from '../../context/UserContext';

const Header = () => {
  const {loggedIn} = useContext(UserContext) as IUserContext;
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
        {
          loggedIn ? 
            <Link to="/cart">Carrinho</Link>
            :
            <Link to="/Login">Login</Link>
        }
      </HStack>
    </Flex>
  );
};

export default Header;