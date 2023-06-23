import { Box, Heading, Button} from '@chakra-ui/react'
import React from 'react'

export default function TrainApp() {
  return (
    <>
        <Box 
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            paddingY={"50px"}>
            <Heading
                color={"#333333"}
                as={"h2"}
                fontSize={{base: "2rem", sm: "2.6rem", md: "3.5rem"}}
                textAlign={"center"}
                lineHeight={"55px"}
                >
                Train your app<br/> with Lobe
            </Heading>

            <Button
            as="button"
            marginTop={"60px"}
            py="0.8rem"
            px="1.7rem"
            bg={"palette.100"} 
            borderRadius={"30px"} 
            color={"white"}
            fontSize={"1.4rem"}
            fontWeight={"600"}
            transition="transform 1s ease-in-out"
            _hover={{
              transform: 'scale(1.2)'
            }}
            width={"fit-content"}
            mx={"auto"}
            
          >
            Download
          </Button>
        </Box>
    </>
  )
}
