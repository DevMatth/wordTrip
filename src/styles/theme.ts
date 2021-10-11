import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    yellow: {
      '100': '#FEFCBF',
      '200': '#FAF089',
      '300': '#F6E05E',
      '400': '#FFBA08',
      '500': '#D69E2E',
      '600': '#B7791F',
      '700': '#975A16',
      '800': '#744210',
      '900': '#5F370E',
      '50': '#FFFFF0',
    },

    gray: {
      '100': ' #F5F8FA',
      '200': ' #E2E8F0',
      '300': ' #DADADA',
      '400': ' #A0AEC0',
      '500': ' #999999',
      '600': ' #4A5568',
      '700': ' #47585B',
      '800': ' #1A202C',
      '900': ' #171923',
      '50': '#F7FAFC',
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700"
      }
    }
  }
})