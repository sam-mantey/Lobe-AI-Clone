import { Modal, ModalContent, ModalOverlay, useDisclosure, Box, Button } from "@chakra-ui/react"
import YouTubePlayer from "react-player/youtube"
import { ImPlay2 } from "react-icons/im"

export default function YoutubeOverLay() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const youtubeStyle = {
        borderRadius: "30px"
    }
  return (
    <>
        <Button
                color={"palette.100"} 
                as="button"
                
                py="0.8rem"
                px="1.7rem"
                bg="none" 
                borderRadius={"none"} 
                fontSize={"1.5rem"}
                fontWeight={"600"}
                transition="transform 1s ease-in-out"
                _hover={{
                transform: 'scale(1.2)'
                }}
                spacing="6px" 
                rightIcon={<ImPlay2 />}
                onClick={onOpen}
            >
                Watch Tour
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent height={"500px"} width="500px" borderRadius={"30px"}>
                <YouTubePlayer url={"https://youtu.be/Mdcw3Sb98DA"} height={"500px"} width="500px" style={youtubeStyle}/>
            </ModalContent>
        </Modal>
    </>
  )
}
