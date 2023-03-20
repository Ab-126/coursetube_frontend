import { Button, Container, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import pf from '../../assets/images/paymentfail.png';

const PaymentFail = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <Image src={pf} boxSize={'xs'} />
        <Heading my={'8'} textAlign={'center'} textTransform={'uppercase'}>
          Payment Fail
        </Heading>
        <Link to="/subscribe">
          <Button variant={'ghost'}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
