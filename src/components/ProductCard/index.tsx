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
import {AiFillDelete} from 'react-icons/ai';

interface ProductCard {
  name: string
  price: number
  product_id: string
  product_quantity?: number
  handleUpdate: (product_id: string, quantity: number) => void,
  hasDelete?: boolean,
  handleDelete?: (product_id: string) => void,
}

const ProductCard: React.FC<ProductCard> =({
  name, 
  price, 
  product_id, 
  product_quantity = 1,
  handleUpdate,
  handleDelete,
}) => {
  const [quantity, setQuantity] = useState<number>(product_quantity);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
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
            onClick={() => handleUpdate(product_id, quantity)}
          >
            <BsCartPlusFill />
          </Button>
          {handleDelete &&
          <Button 
            variant="ghost" 
            colorScheme="red"
            onClick={() => handleDelete(product_id)}
          >
            <AiFillDelete />
          </Button>
          }
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
