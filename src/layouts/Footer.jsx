import { Grid, GridItem, Text, Link, Icon, Box } from '@chakra-ui/react'
import React from 'react'
import {BsReddit, BsTwitter, BsYoutube} from "react-icons/bs"


export default function Footer() {

    const boxIcon = {
        height: "40px", 
        width: "40px", 
        bg: "palette.100", 
        borderRadius: "50%", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 1s ease-in-out",
        _hover: {
            transform: 'scale(1.2)'
        }
    }

    const iconStyle = {
        height: "25px",
        width: "25px",
        color: "white"
    }
  return (
    <>
        <Box as="footer">
            <Grid 
                templateAreas={{
                    base: `
                    "about"
                    "general"
                    "resources"
                    "socials"
                    "rights"`,
                    sm: `
                    "about about"
                    "general general"
                    "resources socials"
                    "rights rights"`,
                    md: `
                    "rights about general resources socials"`
                }
                }
                justifyItems={"center"}
                gap={'10'}
                width={"80vw"}
                mx={"auto"}
                borderTop={"2px solid #333333"}
                py={"60px"}
                alignItems={"center"}>
                <GridItem area={"about"} display={"grid"}  width={"fit-content"} textAlign={"center"}>
                    <Text color={"#333333"} fontWeight={"500"}>About</Text>
                    <Link>Download</Link>
                    <Link>Overview</Link>
                    <Link>Example</Link>
                    <Link>Blog</Link>
                </GridItem>
                <GridItem display={"grid"} area={"general"} width={"fit-content"}  textAlign={"center"}>
                    <Text color={"#333333"} fontWeight={"500"}>General</Text>
                    <Link>Notice</Link>
                    <Link>License</Link>
                    <Link>Press Inquiry</Link>
                    <Link>Press Images</Link>
                </GridItem>
                <GridItem display="grid" area={"resources"} width={"fit-content"}  textAlign={"center"}>
                    <Text color={"#333333"} fontWeight={"500"}>Resources</Text>
                    <Link>Help</Link>
                    <Link>Tour</Link>
                    <Link>Contact</Link>
                    <Link>Privacy</Link>
                </GridItem>
                <GridItem display="grid" area={"socials"} width={"fit-content"} gap="2">
                    <Box sx={boxIcon}>
                        <Icon as={BsReddit} sx={iconStyle}/>
                    </Box>
                    <Box sx={boxIcon}>
                        <Icon as={BsTwitter} sx={iconStyle}/>
                    </Box>
                    <Box sx={boxIcon}>
                        <Icon as={BsYoutube} sx={iconStyle}/>
                    </Box>
                </GridItem>
                <GridItem display="grid" area={"rights"} width={"fit-content"}  textAlign={"center"}>
                    <Text>Lobe</Text>
                    <Text>A product by Microsoft.</Text>
                    <Text>All rigths reserved.</Text>
                    <Text>&copy; Microsoft 2021</Text>
                </GridItem>
            </Grid>
        </Box>
    </>
  )
}
