import { IconButton } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

export default function({hello, setHello}) {
 return (
    <>
        <IconButton 
            borderRadius="50%"
            _hover="none"
            onClick={() => setHello(!hello)}
            width="40px"
            size={"lg"}
            icon={hello ? <CloseIcon /> : <HamburgerIcon size="lg"/>}
        />

    </>
  )
}
