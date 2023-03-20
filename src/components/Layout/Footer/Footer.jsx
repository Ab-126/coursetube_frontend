import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box padding={'4'} bg="black" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width='full'>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Abhi Rox Programmer"
            color={'red.400'}
          />
        </VStack>
        <HStack spacing={['2', '10']} justifyContent='center' color='white' fontSize={'35'}>
          <a href="#" target={'blank'}>
            <FaYoutube />
          </a>
          <a href="#" target={'blank'}>
            <FaInstagram />
          </a>
          <a href="#" target={'blank'}>
            <FaGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
