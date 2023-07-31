import { extendTheme, ThemeOverride } from "@chakra-ui/react"

export const customTheme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    // We suggest you to use https://www.tailwindshades.com/ to generate your color palettes easily.
    colors: {
        primary: {
            DEFAULT: "#ffd900",

            50: "#fffbda",
            100: "#fff4ad",
            200: "#ffec7d",
            300: "#ffe44b",
            400: "#ffdd1a",
            500: "#e6c300",
            600: "#b39800",
            700: "#806d00",
            800: "#4d4100",
            900: "#1c1600"
        }
    }
} as ThemeOverride)
