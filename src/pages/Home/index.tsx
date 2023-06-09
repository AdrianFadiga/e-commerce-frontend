import { Flex, SimpleGrid } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import CustomerPage from '../../components/CustomerPage';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { ICategory } from '../../interfaces/ICategory';
import { IProduct } from '../../interfaces/IProduct';
import { requestApi } from '../../services';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const response = await requestApi<IProduct[]>({method: 'get', url: `/v1/categories/${categoryId}/products`});
    setProducts(response.data);
  };

  useEffect(() => {
    if (categoryId) getProducts();
  }, [categoryId]);

  const getCategories = async () => {
    const response = await requestApi<ICategory[]>({method: 'get', url: '/v1/categories'});
    setCategoryId(response.data[0].id);
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleUpdate = async (product_id: string, quantity: number) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
      await requestApi({method: 'PUT', url: '/v1/shopping_carts', headers: {...accessToken}, data: {product_id, quantity}});
    } catch (err: any) {
      console.log(err.data);
    }
  };

  return (
    <CustomerPage>
      <Navbar 
        setCategoryId={setCategoryId}
        categories={categories}
      />
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
            {products.map(({ id, name, price }) => (
              <ProductCard
                key={id}
                name={name}
                price={price}
                product_id={id}
                handleUpdate={handleUpdate}
              />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </CustomerPage>
  );
};

export default Home;