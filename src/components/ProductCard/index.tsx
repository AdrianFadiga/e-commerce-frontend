import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import {BsCartPlusFill} from 'react-icons/bs';
import { requestApi } from '../../services';

interface ProductCard {
  name: string
  description: string
  price: number
  product_id: string
}

const ProductCard: React.FC<ProductCard> =({name, description, price, product_id}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
      await requestApi({method: 'PUT', url: '/v1/shopping_carts', headers: {...accessToken}, data: {product_id, quantity}});
    } catch (err: any) {
      console.log(err.data);
    }
  };
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button 
            variant="solid" 
            colorScheme="blue" 
            size="sm"
            onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
          <span>{quantity}</span>
          <Button 
            variant="solid" 
            colorScheme="blue" 
            size="sm"
            onClick={() => {if (quantity > 1) setQuantity(quantity - 1);}}
          >
            -
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button 
            variant="ghost" 
            colorScheme="blue"
            onClick={() => addToCart()}
          >
            <BsCartPlusFill />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
