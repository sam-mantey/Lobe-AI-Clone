import React from 'react'
import { Box, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import PowerPlatform from '../assets/blog-gallery/lobe-and-power-platform.png'
import MarchCards from '../assets/blog-gallery/march-release-cards.jpg'
import marchBison from '../assets/blog-gallery/march-release-cards.jpg'
// import ardafruit from '../assets/blog-gallery/ardafruit-lobe-hero.jpg'
import birdCamera from '../assets/blog-gallery/bird-camera.jpg'
import plantOverlay from '../assets/blog-gallery/plants-overlay.jpg'


export default function Blog() {
  return (
    <>
      <Box
        position={'relative'}
        top={"70px"}
        width={{base: '80%', sm: '60%', lg: '50%'}}
        marginInline={'auto'}
        paddingY={"50px"} >
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
          
          <SimpleGrid 
            width={{base: '98%'}}
            mx={'auto'}
            py={'70px'}
            columns={{base: 1, sm: 2}}
            gap={20}>
            <Box
              maxWidth={{base: '428px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
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
              maxWidth={{base: '428px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
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
              maxWidth={{base: '428px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
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
              maxWidth={{base: '428px'}}
              boxShadow={'xl'}
              borderRadius={'25px'}
              >
              <Box>
                <Image 
                  objectFit={'cover'}
                  borderTopRadius={'25px'}
                  src={PowerPlatform}/>

              </Box>
              <Box marginX={{base: '8%', sm: '20%'}}>
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
                  Product . 15 November 2021</Text>
              </Box>
            </Box>
          </SimpleGrid>
      </Box>
    </>
  )
}
