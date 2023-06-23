import { Box, Heading, Text, Flex, Button, HStack, Show, Image, Card, CardHeader, CardBody, CardFooter, Container, keyframes, scaleFadeConfig} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import videofilemd from "../assets/main-video.mp4"
import videofilesm from "../assets/main-sm-video.mp4"
import YoutubeOverLay from "./inOverview/YoutubeOverLay"
import overviewImage from "../assets/overviewImageBig.jpg"
import lightBulb from "../assets/lightBulb.mp4"
import padLock from "../assets/padLock.mp4"
import shiping from "../assets/shiping.mp4"
import imageClassification from "../assets/imageClassification.mp4"
import objectDetection from "../assets/objectDetection.mp4"
import dataClassification from "../assets/dataClassification.mp4"
import labelImage1 from "../assets/labelImages.mp4"
import labeledImage2 from "../assets/labeledImages.mp4"
import finaly from "../assets/finally.mp4"
import Export from "./inOverview/Export";


  const hover = keyframes `
    from {
      scale: 1;
    }
    to {
      scale: 1.3;
    }`

export default function Overview() {
    const hoverAnimation = `${hover}  5s`
  return (
    <>
      <Flex 
      position={"relative"}
      height={{base: "fit-content", md: "calc(100vh - 70px)"}}
      maxWidth={{base: "90%", md: "85%"}}
      mx="auto"
      top="70px"
      display="flex"
      flexDir={{base: "column-reverse" , lg : "row"}}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      >
        <Box
        as="main"
        heigth="290px"
        width="440px"
        marginTop={{base: "-100px", sm: "-50px", md: "-50px"}}
        marginRight={{base: "0", md: "-40px", lg : "-10px"}}
        zIndex={"1"}>
          <Heading 
          as="h1"
          fontSize={{base: '2.4rem', md: "3rem", lg: "3.5rem"}}
          textAlign={{base: "center", md: "left"}}
          >
            Train apps to
            <Text 
              fontSize={{base: "2.4rem" ,md: "3rem", lg: "3.5rem"}} 
              color="palette.100" 
              fontWeight={"500"}
              textAlign={{base: "center", md: "left"}}
            >
              Identify Plants
            </Text>
          </Heading>

        <Text
          fontSize={{base: "1.2rem", sm: "1.6rem", md: "1.6rem"}} 
          colorScheme="#333333"
          textAlign={{base: "center", md: "left"}}
          mx={{base: "auto", sm: "0"}}
          width={{base: "200px", sm: "100%"}}>
          <Show above="md" >
            Lobe helps you train machine learning models with a free, easy to use tool.
          </Show>
          <Show below="md" >
            Create machine learning models with a free, easy to use tool.
          </Show>
        </Text>

        <HStack 
            paddingTop={"30px"} 
            display={"flex"}
            justifyContent={{base: "space-evenly", sm: "center"}}
            width={"fit-content"}
            mx={{base: "auto", md: "0"}}
          >

          <Button
            as="button"
            py="0.8rem"
            px="1.7rem"
            bg={"palette.100"} 
            borderRadius={"30px"} 
            color={"white"}
            fontSize={"1.5rem"}
            fontWeight={"600"}
            transition="transform 1s ease-in-out"
            _hover={{
              transform: 'scale(1.2)'
            }}
            size={"lg"}
          >
            Download
          </Button>
          
          <YoutubeOverLay />

          </HStack>
        </Box>

        <Box
          marginTop={{base: "-45px", sm: ""}}
        >
          <Show above="sm">
            <ReactPlayer url={videofilemd} loop={true} playing={true} height={"560px"} width={"500px"}/>
          </Show>

          <Show below="sm" >
            <ReactPlayer url={videofilesm} loop={true} playing={true} height={"440px"} width={"400px"} />
          </Show>
        </Box>
      </Flex>

      <Box 
        as={"section"}
        marginTop={{base: "120px" , md: "150px"}}
        bg={"#F2F3F5"}
        paddingBottom="60px"
        >
          <Box 
            py={"40px"}
            width={{base: "90%", sm: "80%"}}
            mx={"auto"}>
            <Heading as={"h2"} 
              width={{base: "100%", sm: "90%"}}
              lineHeight={{base: "40px", sm: "50px"}}
              fontSize={{base: "2.3rem", sm: "3.5rem"}}
              py={"20px"}
              fontWeight={"700"}
              >
              Machine learning
              <br/>
              made <Text display={"inline"} color={"palette.100"}>easy</Text>
            </Heading>
        
          <Text 
            as="p" 
            color={"#333333"}
            wordBreak={"word-wrap"}
            width={{base: "90%", sm: "95%", md: "700px"}}
            fontSize={"1.5rem"}
            >
              Lobe has everything you need to bring your machine learning ideas to life. Just show it examples of what you want it to learn, and it automatically trains a custom machine learning model that can be shipped in your app.
          </Text>
        </Box>
        <Box>
          <Image src={overviewImage}/>
        </Box>

        <Box 
          display={"flex"}
          flexDir={{base: "column", lg: "row"}}
          width={{base: "90%"}}
          mx={"auto"}
          justifyContent={"space-evenly"}
          gap={{base: "10", md: "5"}}>

          <Box 
            display={"flex"} 
            flexDir={{base: "row", lg: "column"}}
            width={{lg: "270px"}}
            height={{lg: "fit-content"}}
            gap={{base: "6", lg: 0}}
            >
            <Box 
              borderRadius={"13px"} 
              overflow={"hidden"}  
              width={{base: "46px", sm: "55px", md: "65px"}}
              height={{base: "46px", sm: "55px", md: "65px"}}
              >
              <ReactPlayer url={lightBulb} loop={true} playing={true} height={"100%"} width={"100%"} />
            </Box>
            <Box width={{base: "70%", lg: "90%"}}>
              <Text fontSize={"1.3rem"} fontWeight={"700"} py={{lg: "1rem"}}>Easy to use</Text>
              <Text fontSize={"1.3rem"}>
                Designed to be easy enough for anyone to use. No code or experience required.
              </Text>
            </Box>
          </Box>
          

          <Box 
            display={"flex"} 
            flexDir={{base: "row", lg: "column"}}
            width={{lg: "270px"}}
            height={{lg: "fit-content"}}
            gap={{base: "6", lg: 0}}
            >
            <Box 
              borderRadius={"13px"} 
              overflow={"hidden"}  
              width={{base: "46px", sm: "55px", md: "65px"}}
              height={{base: "46px", sm: "55px", md: "65px"}}
              >
              <ReactPlayer url={padLock} loop={true} playing={true} height={"100%"} width={"100%"} />
            </Box>
            <Box width={{base: "70%", lg: "90%"}}>
              <Text fontSize={"1.3rem"} fontWeight={"700"} py={{lg: "1rem"}}>Free and Private</Text>
              <Text fontSize={"1.3rem"}>
              Train for free on your own computer without uploading your data to the cloud.
              </Text>
            </Box>
          </Box>
          

          <Box 
            display={"flex"} 
            flexDir={{base: "row", lg: "column"}}
            width={{lg: "270px"}}
            height={{lg: "fit-content"}}
            gap={{base: "6", lg: 0}}
            >
            <Box 
              borderRadius={"13px"} 
              overflow={"hidden"}  
              width={{base: "46px", sm: "55px", md: "65px"}}
              height={{base: "46px", sm: "55px", md: "65px"}}
              >
              <ReactPlayer url={shiping} loop={true} playing={true} height={"100%"} width={"100%"} />
            </Box>
            <Box width={{base: "70%", lg: "90%"}}>
              <Text fontSize={"1.3rem"} fontWeight={"700"} py={{lg: "1rem"}}>Export Anywhere</Text>
              <Text fontSize={"1.3rem"}>
                Available for Mac and Windows. Export your model and ship it on any platform you choose.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          py={"50px"}
          width={{base: "90%", md : "80%"}}
          mx={"auto"}>
          <Heading as="h3" fontSize={{base: "2rem", md: "2.5rem"}} fontWeight={"700"}>
            <Text display={"inline"} color={"palette.100"}>Project</Text> Templates
            </Heading>

            <Text 
              color={"#333333"} 
              fontSize={{base: "1.25rem", md: "1.5rem"}}
              width={{base: "80%", md: "600px"}}
              fontWeight={"400"}
              py={"10px"}>
            Lobe will automatically select the right machine learning architecture for your project. Image classification is available now, with more templates coming soon.
            </Text>
        </Box>
        
        <HStack
          mx="auto"
          gap={{base: 5, md: 20}} 
          display="flex" 
          justifyContent={{base: "start", md: "center"}}
          overflowX={{base: "auto"}}
          overflowY={"hidden"}
          px={{base: "30px", lg: "0"}}
          >
          
          <Card 
            align={"center"} 
            borderRadius={"25px"} 
            minHeight={{base: "340px", md: "360px"}} 
            minWidth={{base: "260px", md: "290px"}}>
            <CardBody paddingTop={{base: "10px", md: "30px"}}>
              <ReactPlayer url={imageClassification} width={"130px"} height="87px" loop={true} playing={true}/>
            </CardBody>
            <CardHeader  py="0">
              <Heading fontSize={"1.3rem"} fontWeight={"700"}>Image Classification</Heading>
            </CardHeader>
            <CardBody >
              <Text fontSize={"1.25rem"} textAlign={"center"} wordBreak={"break-word"}>Label an image based on its content.</Text>
            </CardBody>
            <CardFooter >
              <Box
                color="white"
                bg="palette.100"
                px={"1.1rem"}
                borderRadius={"20px"}
                position={"relative"}
                top={"-10px"}
                fontWeight={"500"}
                fontSize={"lg"}
                >Available Now</Box>
            </CardFooter>
          </Card>

          <Card 
            align={"center"} 
            borderRadius={"25px"} 
            minHeight={{base: "340px", md: "360px"}} 
            minWidth={{base: "260px", md: "290px"}}>
            <CardBody paddingTop={{base: "10px", md: "30px"}}>
              <ReactPlayer url={objectDetection} width={"130px"} height="87px" loop={true} playing={true}/>
            </CardBody>
            <CardHeader py="0">
              <Heading fontSize={"1.58rem"} fontWeight={"700"}>Object Detection</Heading>
            </CardHeader>
            <CardBody >
              <Text 
                fontSize={"1.25rem"} 
                textAlign={"center"} 
                wordBreak={"break-word"}
                >Locate an object inside of an image.
              </Text>
            </CardBody>
            <CardFooter >
              <Box
                bg="#EEF0F2"
                px={"1.1rem"}
                borderRadius={"20px"}
                position={"relative"}
                top={"-10px"}
                fontWeight={"500"}
                fontSize={"lg"}
                >Coming Soon</Box>
            </CardFooter>
          </Card>

          <Card 
            align={"center"} 
            borderRadius={"25px"} 
            minHeight={{base: "340px", md: "360px"}} 
            minWidth={{base: "260px", md: "290px"}}>
            <CardBody paddingTop={{base: "10px", md: "30px"}}>
              <ReactPlayer url={dataClassification} width={"130px"} height="87px" loop={true} playing={true}/>
            </CardBody>
            <CardHeader py="0">
              <Heading fontSize={{base: "1.2rem", sm: "1.56rem", md : "1.78rem"}} fontWeight={"700"}>Data Classification</Heading>
            </CardHeader>
            <CardBody >
              <Text fontSize={"1.25rem"} textAlign={"center"} wordBreak={"break-word"}>Label data in a table based on its content.</Text>
            </CardBody>
            <CardFooter >
              <Box
                bg="#EEF0F2"
                px={"1.1rem"}
                borderRadius={"20px"}
                position={"relative"}
                top={"-10px"}
                fontWeight={"500"}
                fontSize={"lg"}
                >Coming Soon</Box>
            </CardFooter>
          </Card>

        </HStack>
      </Box>

      <Box as="section" width={{base: "90%", md: "80%"}}mx={"auto"} py={"40px"}>
        <Heading as="h2" fontSize={{base: "2.5rem", md: "3.5rem"}} py={"10px"}>
          Label, Train, <Text as="h2" color="palette.100" display={"inline"}>Use</Text>
        </Heading>
        <Text color={"#333333"} fontSize={{base: "1.2rem", md: "1.5rem"}} width={{base: "90%", md: "600px"}}>Lobe simplifies the process of machine learning into three easy steps. Collect and label your images. Train your model and understand your results. Then play, improve, and export your model.</Text>
      </Box>

      <Box 
        overflowX={"hidden"} 
        overflowY={"hidden"}
        display={"flex"}
        marginLeft={"-50px"}
        maxWidth={{base: "600px", sm: "1000px", md: "1500px"}}
        minHeight={{base: "320px", sm: "450px", md: "703px"}}
        >
      <ReactPlayer url={labelImage1} height={"100%"} width={"100%"} loop={true} playing={true}/>
      </Box>

      <Box
        width={{base: "90%", md: "80%"}}
        mx={"auto"}
        marginTop={{base: "-70px", sm: "-60px", md: "-140px"}}>
          <Heading as="h2" fontSize={{base: "2.5rem", md: "3.5rem"}} py={"10px"}>
          <Text as="h2" color="palette.100" display={"inline"}>Label </Text>
          your images 
        </Heading>

        <Text color={"#333333"} fontSize={{base: "1.2rem", md: "1.5rem"}} width={{base: "90%", md: "600px"}}>
          Collect bursts using your webcam, or drag in a folder of images from your computer. Then quickly label your images to create a machine learning dataset.
        </Text>
      </Box>

      <Box 
        display={"flex"}
        marginLeft={"-50px"}
        maxWidth={{base: "600px", sm: "1000px", md: "1500px"}}
        height={{base: "320px", sm: "450px", md: "703px"}}
        overflowX={"hidden"} 
        overflowY={"hidden"}
        >
      <ReactPlayer url={labeledImage2} height={"100%"} width={"100%"} loop={true} playing={true}/>
      </Box>

      <Box
        width={{base: "90%", md: "80%"}}
        mx={"auto"}
        display="flex"
        justifyContent={{base: "start", md: "end"}}
        marginTop={{base: "-50px", sm: "-60px", md: "-80px"}}>
          <Box>
          <Heading as="h2" fontSize={{base: "2.5rem", md: "3.5rem"}} py={"10px"}>
          <Text as="h2" color="palette.100" display={"inline"}>Train </Text>
          automatically
        </Heading>

        <Text color={"#333333"} fontSize={{base: "1.2rem", md: "1.5rem"}} width={{base: "90%", md: "600px"}}>
          Automatically train on your own computer without any setup or configuration. Understand the strengths and weaknesses of your model with live visual results.
        </Text>
          </Box>
         </Box>


        <Box 
          overflowX={"hidden"} 
          overflowY={"hidden"}
          display={"flex"}
          marginLeft={"-50px"}
          maxWidth={{base: "600px", sm: "1000px", md: "1500px"}}
          height={{base: "320px", sm: "450px", md: "703px"}}
        >
          <ReactPlayer url={finaly} height={"100%"} width={"100%"} loop={true} playing={true}/>
        </Box>

        <Box
        width={{base: "90%", md: "80%"}}
        mx={"auto"}
        marginTop={{base: "-70px", sm: "-60px", md: "-160px"}}
        paddingBottom={"10px"}>
          <Heading as="h2" fontSize={{base: "2.5rem", md: "3.5rem"}} py={"10px"}>
          <Text as="h2" color="palette.100" display={"inline"}>Use </Text>
          your model 
        </Heading>

        <Text color={"#333333"} fontSize={{base: "1.2rem", md: "1.5rem"}} width={{base: "90%", md: "600px"}}>
        Use your model with your webcam or images from your computer. Improve your results by giving your model feedback on its predictions, then finally export it to your app.
        </Text>
      </Box>
      
      {/* Export component */}

      <Export />

    </>
  )
}


