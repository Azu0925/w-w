import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: {
            main: '#6667ab',
            sub: '#8485b9',
            text: '#2292929',
            whiteText: '#ffffff',
        },
    },
    fonts: {
        body: 'Noto Sans JP',
    },
})

export default theme
