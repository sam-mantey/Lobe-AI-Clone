import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import vidImg from '../assets/tour-gallery/Video.jpg'

export default function Tour() {
  // const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <>
      <Box
        position={'relative'}
        top={"70px"}
        paddingY={"50px"} 
        mx={'auto'}
        width={{base: '90%', sm: '75%'}}>

        <Box
            mx={'auto'} 
            width={{base: '80%', sm: '60%', lg: '60%'}}>
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
                 Tour
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


          <Image 
            src={vidImg} borderRadius={'25px'} 
            my={{base: '40px', sm: '70px'}} 
            boxShadow={'xl'} 
            _hover= {{
              transform:'scale(1.1)',
              cursor:"pointer"
            }}
            transition="transform .8s ease-in-out"
            // onClick={() => {
            //   setIsVideoOpen(true)
            //   console.log(isVideoOpen)
            // }}
              />

            
      </Box>
      {/* <VideoOverlay /> */}
    </>
  )
}




// const VideoOverlay = () => {
//   return (
//     <>  
//       <Box
//         height={'100%'}
//         width={"100%"}
//         backgroundColor={'#000'}
//         position={'fixed'}
//         display={'flex'}
//         zIndex={99}>
//           <Box
//             backgroundColor={'white'}
//             height={'200px'}
//             width={'400px'} 
//             >
//               hello
//           </Box>
//       </Box>
//     </>
//   )
// }