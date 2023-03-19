import {
  Box,
  Flex,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { ICategory } from '../../interfaces/ICategory';

interface CustomerPageProps {
  categories: ICategory[]
  setCategoryId: (value: string) => void;
}


const Navbar: React.FC<CustomerPageProps> = ({setCategoryId, categories}) => {

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
              <Tab 
                key={id}
                onClick={() => setCategoryId(id)}
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Navbar;