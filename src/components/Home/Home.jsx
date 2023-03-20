import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../../assets/images/image.png';
import { CgGoogle, CgYoutube, CgFacebook, CgAdidas } from 'react-icons/cg';
import {
  SiCoursera,
  SiUdemy,
  SiUdacity,
  SiUbereats,
  SiAmazon,
} from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="red">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.900">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'red'}
          children="Our Partners"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <CgFacebook />
          <CgAdidas />
          <SiCoursera />
          <SiUdacity />
          <SiUdemy />
          <SiUbereats />
          <SiAmazon />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
