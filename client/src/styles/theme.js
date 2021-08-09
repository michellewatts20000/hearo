import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { LinkStyles as Link } from "./components/LinkStyles";
import { HeadingStyles as Heading } from "./components/HeadingStyles";
import { AlertStyles as Alert } from "./components/AlertStyles";
import { TextStyles as Text } from "./components/TextStyles";
import { InputStyles as Input } from "./components/InputStyles";
import { mode } from "@chakra-ui/theme-tools";

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
    Alert,
    Text,
    Input,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode("white", "gray.900")(props),
        color: mode("black", "white")(props),
        fontFamily: "body",
      },
      input: {
        border: "1px solid",
        borderColor: "gray.400",
        opacity: "1",
      },
      textarea: {
        border: "1px solid",
        borderColor: "gray.400",
        opacity: "1",
      },
      select: {
        border: "1px solid",
        borderColor: "gray.400",
        opacity: "1",
      },
      // styles for the `a`
      a: {
        color: "black",
        _hover: {
          textDecoration: "none",
        },
      },
    }),
  },
});
