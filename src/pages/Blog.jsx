import React from 'react'
import { Box, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import PowerPlatform from '../assets/blog-gallery/lobe-and-power-platform.png'
import MarchCards from '../assets/blog-gallery/march-release-cards.jpg'
import marchBison from '../assets/blog-gallery/march-release-bison.jpg'
import ardafruit from '../assets/blog-gallery/adafruit.jpg'
import birdCamera from '../assets/blog-gallery/bird-camera.jpg'
import plantOverlay from '../assets/blog-gallery/plants-overlay.jpg'
import Release2 from '../assets/blog-gallery/release-2.jpg'



export default function Blog() {
  return (
    <>
      <Box
        position={'relative'}
        top={"70px"}
        paddingY={"50px"} 
        mx={'5%'}>
          <Box
            mx={'auto'} 
            width={{base: '80%', sm: '60%', lg: '50%'}}>
              <Heading
            as="h1"
            width={{base: "100%", sm: "90%"}}
            lineHeight={{base: "40px", sm: "50px"}}
            fontSize={{base: "2.5rem", sm: "3.5rem"}}
            py={"20px"}
            fontWeight={"700"}
            textAlign={'center'}>
               Lobe <Text
              display={"inline"} color={"palette.100"}>
                 Blog
            </Text>
          </Heading>

          <Text
            textAlign={'center'}
            as="p" 
            color={"#333333"}
            fontSize={{base: '1.15rem', sm: '1.5rem'}}
            lineHeight={'22px'}
            fontWeight={400}>
            Read about our newest releases, and get tips on how to create custom machine learning models with Lobe.
          </Text>
          </Box>
          
          
          <SimpleGrid 
            width={{base: '98%', sm: '80%', lg: '85%', xl: '80%'}}
            mx={'auto'}
            py={'70px'}
            columns={{base: 1, lg: 2}}
            gap={{base: 5, sm: 10, lg: 20}}
            >
            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={PowerPlatform}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Using your model in Power Platform
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  We're excited to announce a new integration with Microsoft Power Platform.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Product . 15 November 2021</Text>
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={'auto'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={MarchCards}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Introducing new ways to use your model
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Lobe 0.9 introduces new ways of using and exporting your model to your app.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Product . 23 March 2021</Text>
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx="auto"
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={marchBison}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Using your model 101
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Learn everything you need to know to export your model and use it in your app.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Product . 23 March 2021</Text>
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={'auto'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={ardafruit}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Machine Learning Kit with Adafruit
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Introducing a brand new machine learning kit from Adafruit and Lobe.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Product . 31 March 2021
                  </Text>
              </Box>
            </Box>

            {/* 5th box */}
            <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={'auto'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={Release2}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                    Four New Features in Lobe
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Select your camera source, export your model to new formats, and more in new Lobe.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Release . 10 December 2020
                  </Text>
              </Box>
            </Box>


            {/* 6th box */}

            <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={'auto'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={birdCamera}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Endless Camera Sources
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.5rem'}}
                  paddingBottom={'20px'}
                  >
                  Release . 10 December 2020
                  </Text>
              </Box>
            </Box>
          </SimpleGrid>



          {/* last box */}
          <Box
              maxWidth={{base: '428px', lg: '510px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={'auto'}
              marginBottom={'40px'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={plantOverlay}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Machine Learning Made Easy
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'20px'}>
                  Everything you need to train custom machine learning models in a free, easy to use app.
                </Text>

                <Text
                  color={'#989898'}
                  fontSize={{base: '1rem', sm: '1.2rem'}}
                  paddingBottom={'20px'}
                  >
                  Release . 26 October 2020
                  </Text>
              </Box>
            </Box>

      </Box>
    </>
  )
}
