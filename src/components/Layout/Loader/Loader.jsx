import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{ transform: 'scale(4)' }}>
        <Spinner
          thickness="3px"
          speed="1s"
          emptyColor="transparent"
          color="red"
          size="xl"
        />
      </div>
    </VStack>
  );
};

export default Loader;
