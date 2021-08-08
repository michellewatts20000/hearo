export const ButtonStyles = {
  baseStyle: {
    fontWeight: "bold", 
  },

  sizes: {},

  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "gray.800",
      _hover: {
        bg: "secondary",
        boxShadow: "md",
        color:"white",
        transform: "scale(1.03)",
      },
  }),
  hamburger: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "white",
      color: "white",
      _hover: {
       
      },
  }),
},

  defaultprops: {},
};
