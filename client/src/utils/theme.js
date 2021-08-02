import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// const styles = {
//   global: (props) => ({
//     body: {
//       color: mode("gray.100")(props),
//       bg: mode("gray.900")(props),
//     },
//   }),
// };

const fonts = {
  // heading: "Zen Tokyo Zoo",
};

const theme = extendTheme({ fonts, config });

export default theme;
