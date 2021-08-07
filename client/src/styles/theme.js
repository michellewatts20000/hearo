import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { LinkStyles as Link } from "./components/LinkStyles";
import { HeadingStyles as Heading } from "./components/HeadingStyles";


export const myNewTheme = extendTheme({
  colors: {
    primary: "#7FE6D1",
    secondary: "#62C5C1",
    highlight: "#4EA4AC",
    warning: "#428493",
    danger: "#396576",
  },
  components: {
    Button,
    Link,
    Heading,
     Alert: {
        defaultProps: {
          colorScheme: "primary",
        },
      },
  },

   styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.800",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "black",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});
