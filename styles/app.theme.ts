import { extendTheme } from "@chakra-ui/react"

export const colors = {
    theme: {
        black: "#0a0a0a"
    }
}

const styles = {
    global: () => ({
        "::-webkit-scrollbar": {
            width: "5px"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#4A4A4A",
            borderRadius: "30px",
        },
        "::-webkit-scrollbar-track": {
            background: "transparent"
        },
        body: {
            background: "theme.black"
        }
    })
}

const AppTheme = extendTheme({
    styles,
    colors
})

export default AppTheme