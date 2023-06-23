import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
    palette: {
      100: "#04ddb2",
      200: "hsla(0,0%,100%,.97)"
    }
}



const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>
)
