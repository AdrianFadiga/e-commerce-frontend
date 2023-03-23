import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import CustomerPage from '../../components/CustomerPage';
import ProductCard from '../../components/ProductCard';
import { IShoppingCart } from '../../interfaces/IShoppingCart';
import { requestApi } from '../../services';

const ShoppingCart = () => {
  const [shoppingCartProducts, setShoppingCartProducts] = useState<IShoppingCart[]>([]);

  const getProducts = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
      const response = await requestApi<IShoppingCart[]>({method: 'GET', url: '/v1/shopping_carts', headers: {...accessToken}});
      setShoppingCartProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (product_id: string, quantity: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
      await requestApi({method: 'PUT', url: '/v1/shopping_carts', headers: {...accessToken}, data: {product_id, quantity}});
    } catch (err: any) {
      console.log(err.data);
    }
  };
  const handleDelete = async (product_id: string) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
      await requestApi({method: 'DELETE', url: '/v1/shopping_carts', headers: {...accessToken}, data: {product_id}});
      getProducts();
    } catch (err: any) {
      console.log(err.data);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <CustomerPage>
      <Flex
        justifyContent="space-around"
      >
        <Flex
          w='80%'
        >
          <SimpleGrid 
            columns={{ sm: 2, md: 4, lg: 5, xl: 6, '2xl': 7 }} 
            gap="20px"
          >
            {shoppingCartProducts.map(({quantity, product: {id, name, price}}) => (
              <ProductCard 
                key={id}
                product_id={id}
                name={name}
                price={price}
                product_quantity={quantity}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </CustomerPage>
  );
};

export default ShoppingCart;