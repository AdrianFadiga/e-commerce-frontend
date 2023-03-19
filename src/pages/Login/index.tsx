import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import CustomerPage from '../../components/CustomerPage';
import { requestApi } from '../../services';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const {headers} = await requestApi({method: 'post', url: '/auth/sign_in', data: {email, password}});
      const accessToken = {'access-token': headers['access-token'], uid: headers.uid, client: headers.client};
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      navigate('/home');
    } catch(err: any) {
      console.log(err.data.errors);
    }
  };

  return (
    <CustomerPage>
      <Container
        maxW="md"
        minH="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden" p="6"
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={({target}) => setEmail(target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={({target}) => setPassword(target.value)}
              />
            </FormControl>
            <Button 
              onClick={() => handleSubmit()} 
              colorScheme="blue" 
              size="lg">
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </CustomerPage>
  );
};

export default Login;