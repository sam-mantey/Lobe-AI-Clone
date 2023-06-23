import { NavLink } from "react-router-dom"
import { Box, Button, Text } from "@chakra-ui/react"

export default function DesktopNav() {
  return (
    <>
        <Box display={"flex"} gap={"2rem"} justifyContent={"space-evenly"} color={"#767676"} fontSize={"1.3rem"} fontWeight={"500"}>
            <NavLink to="/">Overview</NavLink>
            <NavLink to="examples">Examples</NavLink>
            <NavLink to="tour">Tour</NavLink>
            <NavLink to="blog">Blog </NavLink>
            <NavLink to="help">Help</NavLink>
        </Box>
                
                <Button borderRadius={"30px"}>
                    <Text 
                    paddingInline={"0.8rem"}
                    fontWeight={"500"} 
                    fontSize={"lg"}>Download</Text>
                </Button>
    </>
  )
}
