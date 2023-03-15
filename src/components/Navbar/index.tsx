import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { requestApi } from '../../services';
import { ICategory } from '../../interfaces/ICategory';



const Navbar: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const getCategories =  async () => {
    const {data} = await requestApi<ICategory[]>({method: 'get', url: '/categories'});
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      w="100%"
      py={6}
      px={10}
      bg="#2F855A"
    >
      <Box
      >
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            {categories.map(({id, name}) => (
              <Tab key={id}>{name}</Tab>
            ))}
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Navbar;