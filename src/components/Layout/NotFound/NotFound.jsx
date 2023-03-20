import { Button, Container, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import pnf from '../../../assets/images/pnf.png'

const NotFound = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <Image src={pnf} />
        <Heading my={'8'} textAlign={'center'}>
          Page Not Found
        </Heading>
        <Link to="/">
          <Button variant={'ghost'}>Go to home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
