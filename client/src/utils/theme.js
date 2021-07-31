import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

 const fonts = {
    // heading: "Zen Tokyo Zoo",
  }

const theme = extendTheme({ config, fonts });

export default theme;
