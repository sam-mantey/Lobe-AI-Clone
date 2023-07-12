import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Text, Link, keyframes } from '@chakra-ui/react'
import React, { useState } from 'react'
import Framer from "../../assets/bubble/frammer.svg"
import Azure from "../../assets/bubble/azure.svg"
import MacOs from "../../assets/bubble/macOS.svg"
import Tensorflow from "../../assets/bubble/tensorflow.svg"
import Python from "../../assets/bubble/python.svg"
import Unity from "../../assets/bubble/unity.svg"
import Windows from "../../assets/bubble/windows.svg"
import Onnx from "../../assets/bubble/onnx.svg"
import GoogleCloud from "../../assets/bubble/googleCloud.svg"
import Arduino from "../../assets/bubble/arduino.svg"
import Rasberypi from "../../assets/bubble/rasberypi.svg"
import Recommendations from './Recommendations'

const hover = keyframes `
    from {
        opacity: 0,
        transform: translateY(-100px)
    }
    to {
        opacity: 1,
        transform: translateY(0)
    }
`

export default function Export() {
    const [destination, setDestination] = useState("Anywhere")
    const myhover = `${hover} 2s linear`

    const bubbleStyle = {
        height: {base: "60px", md: "70px"},
        width: {base: "60px", md: "70px"},
        borderRadius: {base: "15px", md: '20px'},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        boxShadow: "md",
    }
  return (
    <>
        <Box 
            marginTop={{base: "120px" , md: "80px"}}
            bg={"#F2F3F5"}
            as="section"
            paddingBottom="60px"
            overflowX={"hidden"}
            
            >
        
            <Box
                py="40px"
                marginTop={{base: "120px" , md: "80px"}}
                width={{base: "90%", sm: "80%"}}
                mx={"auto"}
        >
                <Heading 
                    as={"h2"}
                    width={{base: "100%", sm: "90%"}}
                    lineHeight={{base: "40px", sm: "50px"}}
                    fontSize={{base: "2.3rem", sm: "3.5rem"}}
                    py={"20px"}
                    fontWeight={"700"}
                >
                    <Text
                        display={"inline"} 
                        color={"palette.100"}
                    >
                        Export
                    </Text>
                    <Text 
                        display={"inline"}
                        animation={myhover}> {destination}</Text>
                </Heading>

                <Text
                    as={"p"}
                    color={"#333333"}
                    wordBreak={"word-wrap"}
                    width={{base: "90%", sm: "95%", md: "700px"}}
                    fontSize={{base: "1.12rem", md: "1.5rem"}}
                    paddingBottom={"50px"}
                >
                    When you are done, you can export your model to a variety of industry standard formats and ship it on any platform you choose.
                </Text>

                <Box transition="transform 1s linear"
                    height={"fit-content"}
                    _hover={{
                        transform: 'scale(1.2)'
                      }}
                      width="fit-content">
                <Link 
                    color="palette.100"
                    fontSize={"1.4rem"}
                    fontWeight={"500"}
                    >
                    Learn more <ChevronRightIcon />
                </Link>
                </Box>
            </Box>

            {/* Bubble icons */}
            <Box height={"450px"} overflowX={"hidden"}>
                <Box 
                 sx={bubbleStyle}
                 bg={"#0E38B1"} 
                 left={"50%"}
                 onMouseEnter={() => {setDestination("Framer")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Framer} alt="Framer motion" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#0089D6"}
                 marginTop={"80px"}
                 left={"25%"}
                 onMouseEnter={() => {setDestination("Azure")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Azure} alt="Azure" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#000000"}
                 marginTop={"-50px"}
                 left={"80%"}
                 onMouseEnter={() => {setDestination("iOS and macOS")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={MacOs} alt="MacOS and iOS" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#FC3C2D"}
                 marginTop={"130px"}
                 left={"63%"}
                 onMouseEnter={() => {setDestination("Tensorflow")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Tensorflow} alt="tensorflow" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#17C37B"}
                 marginTop={"180px"}
                 left={"5%"}
                 onMouseEnter={() => {setDestination("Python")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Python} alt="python" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#333333"}
                 marginTop={"220px"}
                 left={"40%"}
                 onMouseEnter={() => {setDestination("Unity")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}
                 >
                    <img src={Unity} alt="Unity" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#FACA0C"}
                 marginTop={"-20px"}
                 left={"4%"}
                 onMouseEnter={() => {setDestination("Windows")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Windows} alt="windows" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#E54B4B"}
                 marginTop={"260px"}
                 left={"75%"}
                 onMouseEnter={() => {setDestination("Google Cloud")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={GoogleCloud} alt="Google Cloud" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#864BFF"}
                 marginTop={"290px"}
                 left={"18%"}
                 onMouseEnter={() => {setDestination("ONNX")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Onnx} alt="Onnx" />
                </Box>

                <Box 
                 sx={bubbleStyle}
                 bg={"#E10000"}
                 marginTop={"60px"}
                 left={"80%"}
                 onMouseEnter={() => {setDestination("RasberyPi")}}
                 onMouseLeave={() => {setDestination("Anywhere")}}
                 transition="transform 1s ease-in-out"
                 _hover={{
                    transform: 'scale(1.2)'
                 }}>
                    <img src={Rasberypi} alt="Rasbery Pi" />
                </Box>
            </Box>

            {/* Recommendations */}

            <Recommendations />

            {/* Examples */}
        </Box>
    </>
  )
}



