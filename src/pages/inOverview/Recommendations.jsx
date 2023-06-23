import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import Sean from '../../assets/bubble/Sean.jpg'
import KateWood from "../../assets/bubble/KateWood.jpg"
import ChrisCachor from "../../assets/bubble/ChrisCachor.jpg"
import React from 'react'

export default function Recommendations() {
    const innerBoxStyle = {
        width: "244px",
        height: "440px",
        bg: 'white',
    }

    const outerBoxStyle = {
        padding: '24px',
        bg: "white", 
        borderRadius: "20px",
        transition: "transform 1s ease-in-out",
        _hover : {
            transform: 'scale(1.05)'
         },
         boxShadow: "xl"
    }
  return (
    <>
        <HStack 
            fontSize={"1.2rem"}
            fontWeight={"500"}
            maxWidth={{base: "fit-content", md: "100%"}}
            gap={5}
            overflowX={'auto'}
            height={"600px"} 
            display={"flex"}
            justifyContent={{md : 'center'}}
            paddingInline={{base: "20px", md: "0"}}

        >
            <Box sx={outerBoxStyle}>
                <Box sx={innerBoxStyle}>
                    <Box>
                        <Avatar name='Chris Cachor' src={ChrisCachor}/>
                    </Box>
                    <Box>
                        <Text 
                            paddingTop={"40px"}
                            color={"#333333"}
                            >
                            As soon as I used Lobe I was completely blown away. I don't have to spend days trying to learn machine learning. Simply label some images and boom, it really just works.
                        </Text>

                        <Text color={"#333333"} paddingTop={"90px"}>Chris Chachor</Text>
                        <Text color={"#767676"}>Software Engineer</Text>
                    </Box>
                </Box>
                
            </Box>


            <Box sx={outerBoxStyle}>
                <Box sx={innerBoxStyle}>
                    <Box>
                        <Avatar name='Kate Longley-Wood' src={KateWood}/>
                    </Box>
                    <Box>
                        <Text 
                            paddingTop={"40px"}
                            color={"#333333"}
                            >
                            We've been using Lobe to quickly process previously untapped sources of data so that we can improve our models of nature-dependent tourism to promote better decision-making in our oceans.
                        </Text>

                        <Text color={"#333333"} paddingTop={"60px"}>Kate Longley-Wood</Text>
                        <Text color={"#767676"}>Ocean Mapper</Text>
                    </Box>
                </Box>
                
            </Box>

            <Box sx={outerBoxStyle}>
                <Box sx={innerBoxStyle}>
                    <Box>
                        <Avatar name='Sean Cusack' src={Sean}/>
                    </Box>
                    <Box>
                        <Text 
                            paddingTop={"40px"}
                            color={"#333333"}
                            >
                            Lobe is so easy and takes so much of the complicated stuff out of machine learning. Even my kid was begging me to sit in front of the computer and categorize my bees for me.
                        </Text>

                        <Text color={"#333333"} paddingTop={"90px"}>Sean Cusack</Text>
                        <Text color={"#767676"}>Beekeper</Text>
                    </Box>
                </Box>
                
            </Box>

        </HStack>
    </>
  )
}
