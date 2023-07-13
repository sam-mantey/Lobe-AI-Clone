import { Box, Flex, Show } from "@chakra-ui/react";
import {useState} from 'react'
import { Outlet } from "react-router-dom";
import DesktopNav from "../navs/DesktopNav";
import MobileNav from "../navs/MobileNav";
import ExpandedMobileNav from "../navs/ExpandedMobileNav";
import Footer from "./Footer";
import TrainApp from "./TrainApp";

export default function RouteLayout() {
    const [hello, setHello] = useState(false)
  return (
    <div>
        <nav >
            <Flex  
                alignItems={"center"} 
                justifyContent={"space-between"} 
                p={"1rem"} 
                position={"fixed"} 
                width="100%" 
                top={'0'}
                height={"fit-content"} 
                zIndex={"2"}
                bg={"palette.200"}>
                <Box>
                    <h1>Lobe</h1>
                </Box>
                
                <Show breakpoint="(min-width: 720px)">
                    <DesktopNav />
                </Show>

                <Show breakpoint="(max-width: 720px)">
                    <MobileNav hello={hello} setHello={setHello}/>
                </Show>

            </Flex>
            {/* <ExpandedMobileNav hello={hello} setHello={setHello}/> */}
            {hello && <ExpandedMobileNav hello={hello} setHello={setHello}/>}
        </nav>


        <Outlet />

        <TrainApp />

        <Footer />
    </div>

  )
}
