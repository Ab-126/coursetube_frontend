import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={8}>
      <VStack>
        <Avatar
          src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952__340.jpg"
          boxSize={['40', '48']}
        />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Abhishek Kumar" size={['md', 'xl']} />
        <Text
          alignItems={['center', 'left']}
          children={`Hi, I am a full-stack developer and a teacher. Our mission is to provide quality content at reasonable price`}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <video
      autoPlay
      loop
      controls
      controlsList="nodownload nofullscreen noremotplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  );
};

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condiiton"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        letterSpacing={'widest'}
        fontFamily={'heading'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        size={'xs'}
        my="4"
        children="Refund only applicable for cancellation within 7 days"
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="red">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
