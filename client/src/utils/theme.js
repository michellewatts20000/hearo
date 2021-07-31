import { extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}


 const fonts = {
    // heading: "Zen Tokyo Zoo",

  }

const customTheme = extendTheme({ config, fonts });

export default customTheme;
