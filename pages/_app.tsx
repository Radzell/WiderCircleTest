import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import "../styles/global.css"
import { customTheme } from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
