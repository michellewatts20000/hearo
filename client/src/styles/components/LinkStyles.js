export const LinkStyles = {
  baseStyle: {
    fontWeight: "bold",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
    },
  },

  sizes: {},
  variants: {
    highlight: (props) => ({
      color: "#2F4858",
      textDecoration: "none",
      fontWeight: "bold",
      lineHeight: "1.5",
    }),
      black: (props) => ({
      color: "black",
      textDecoration: "none",
      fontWeight: "bold",
      lineHeight: "1.5",
    }),
      secondary: (props) => ({
      color: "secondary",
      textDecoration: "none",
      fontWeight: "bold",
      lineHeight: "1.5",
    }),
  },

  defaultprops: {},
};
