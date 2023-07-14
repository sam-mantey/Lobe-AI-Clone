import { Text, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import fireWatch from '../assets/example-gallery/fire-watch.mp4';
import grapesVid from '../assets/example-gallery/grapes-vid.mp4';
import handGestures from '../assets/example-gallery/hand-gestures.mp4';
import painting from '../assets/example-gallery/painting-vid.mp4';
import personalTrainer from '../assets/example-gallery/personal-trainer.mp4';
import safetyPrecautions from '../assets/example-gallery/safety-precautions.mp4';
import scientificResearch from '../assets/example-gallery/scientific-research.mp4';
import equipment from '../assets/example-gallery/equipment.mp4'
import smartCheckout from '../assets/example-gallery/smart-checkout.mp4';
import telescope from '../assets/example-gallery/telescopic-imagery.mp4';
import whale from '../assets/example-gallery/whale-watching.mp4';
import baby from '../assets/example-gallery/baby.mp4'
import wildlife from '../assets/example-gallery/wildlife-behavior.mp4';
import beehive from '../assets/example-gallery/beehive.mp4'
import aerial from '../assets/example-gallery/aerial.mp4'
import emotionalReactions from '../assets/example-gallery/emotional-reactions.mp4'
import ReactPlayer from "react-player";



export default function Examples() {
  return (
    <>
      <Box
        position={'relative'}
        top={"70px"}
        paddingY={"50px"} 
        mx={'auto'}
        width={{base: '90%'}}>
          
          <Box
            mx={'auto'} 
            width={{base: '90%'}}>
              <Heading
            as="h1"
            width={{base: "100%", sm: "90%"}}
            lineHeight={{base: "40px", sm: "50px"}}
            fontSize={{base: "2rem", sm: "2.5rem"}}
            py={"20px"}
            fontWeight={"700"}
            textAlign={'center'}>
               Lobe <Text
              display={"inline"} color={"palette.100"}>
                 Examples
            </Text>
          </Heading> 
            

          <Text
            textAlign={'center'}
            as="p" 
            color={"#333333"}
            fontSize={{base: '1.15rem', sm: '1.5rem'}}
            lineHeight={'22px'}
            fontWeight={400}>
              Build your first machine learning model in ten minutes. No code or experience required.
          </Text>
          </Box>

          <SimpleGrid 
            width={{base: '98%', sm: '80%', lg: '85%', xl: '80%'}}
            mx={'auto'}
            py={'70px'}
            columns={{base: 1, lg: 2}}
            gap={{base: 5, sm: 10, lg: 20}}>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={grapesVid} height={'100%'} width={'100%'} borderRadius='25px' loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Plant Species
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to distinguish between different species of plants to help people identify poisonous vegetation.
                </Text>

                
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={handGestures} height={'100%'} width={'100%'} borderRadius='25px' loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Hand Gestures
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to understand the movement of your hand to create new kinds of immersive user experiences.
                </Text>

                
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={personalTrainer} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Personal Trainer
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.
                </Text>

                
              </Box>
            </Box>



            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={emotionalReactions} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'500'}
                  py={'20px'}>
                  Emotional Reactions
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to react to different expressions allowing people to send emoji reactions using just their face.
                </Text>

                
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={painting} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Interactive Painting
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.
                </Text>

                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={safetyPrecautions} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Safety Precautions
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.
                </Text>

                
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={whale} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Whale Watching
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.
                </Text>

                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={beehive} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Beehive Health
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.
                </Text>
                
                
              </Box>
            </Box>

            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={baby} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Baby Monitor
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to detect when babies are sleeping or awake to notify parents before they start crying.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={smartCheckout} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Smart Checkout
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={fireWatch} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Fire Watch
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={scientificResearch} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Scientific Reasearch
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={wildlife} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Wildlife Behavior
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={equipment} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Equipment Analytics
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={telescope} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                  Telescopic Imagery
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.
                </Text>
                
                
              </Box>
            </Box>


            <Box
              maxWidth={{base: '428px', lg: '510px' }}
              boxShadow={'xl'}
              borderRadius={'25px'}
              mx={"auto"}
              
              >
              <Box
                borderTopRadius={"25px"} 
                overflow={"hidden"}>
                <ReactPlayer url={aerial} height={'100%'} width={'100%'}  loop={true} playing={true}/>

              </Box>
              <Box marginX={{base: '8%'}}>
                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'700'}
                  py={'20px'}>
                    Aerial Imagery
                </Text>

                <Text
                  color={"#333333"}
                  fontSize={{base: '1.15rem', sm: '1.5rem'}}
                  fontWeight={'400'}
                  lineHeight={'23px'}
                  paddingBottom={'45px'}>
                  Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.
                </Text>
                
                
              </Box>
            </Box>


            

          </SimpleGrid>

      </Box>
    </>
  )
}
