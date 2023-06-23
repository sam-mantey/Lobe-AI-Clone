import { Flex, Link, Button, Box} from '@chakra-ui/react'
import React from 'react'
import {Link as ReachLink} from 'react-router-dom'

export default function ExpandedMobileNav({hello, setHello}) {
    const linkStyle = {
        p: "20px",
        color: "#767676",
        fontSize: "1.6rem",
        fontWeight: "500",
        _hover: "none"
    }

    

  return (
    <>
      <div>
        <Box 
          bg="palette.200"  
          position={"fixed"} 
          top={"70px"} 
          width="100%"  
          zIndex={7}
          transition={"all 3s ease-in-out"}>
          <Flex 
              flexDir={"column"} 
              borderTop={"1px"}
              borderTopColor={"gray.200"}
              width={"100%"}

              >
              <Link as={ReachLink} sx={linkStyle} onClick={() => setHello(!hello)} to="/">Overview</Link>
              <Link as={ReachLink} sx={linkStyle} onClick={() => setHello(!hello)} to="examples">Examples</Link>
              <Link as={ReachLink} sx={linkStyle} onClick={() => setHello(!hello)} to="tour">Tour</Link>
              <Link as={ReachLink} sx={linkStyle} onClick={() => setHello(!hello)} to="blog">Blog</Link>
              <Link as={ReachLink} sx={linkStyle} onClick={() => setHello(!hello)} to="help">Help</Link>

              <Button 
                  bg={"palette.100"}
                  height={"50px"}
                  width="70%" 
                  mx="auto" 
                  borderRadius="30px"
                  mb={"3rem"}
                  fontSize={"1.6rem"}
                  color={"palette.200"}
                  textAlign={"center"}
                  marginTop={"10px"}
                  >
                  Download
              </Button>
          </Flex>
        </Box>
      </div>
    </>
  )
}
