import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


 const fonts = {
    // heading: "Zen Tokyo Zoo",

  }

const customTheme = extendTheme({ config, fonts });

export default customTheme;
