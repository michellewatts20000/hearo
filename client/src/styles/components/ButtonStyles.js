export const ButtonStyles = {
  baseStyle: {
    fontWeight: "bold", 
  },

  sizes: {},

  variants: {
    primary: (props) => ({
      bg: "secondary",
        boxShadow: "md",
        color:"white",
        transform: "scale(1.03)",
          borderRadius: "0",
     
      _hover: {
         bg: "primary",
      color: "white.200",
      borderRadius: "0",
      },
  }),
  hamburger: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "warning",
      color: "warning",
      _hover: {
       
      },
  }),
},

  defaultprops: {},
};
