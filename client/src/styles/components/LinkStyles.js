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
      color: "warning",
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
  },

  defaultprops: {},
};
