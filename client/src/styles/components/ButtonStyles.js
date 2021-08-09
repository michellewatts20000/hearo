export const ButtonStyles = {
  baseStyle: {
    fontWeight: "bold", 
  },

  sizes: {},

  variants: {
    primary: (props) => ({
      bg: "highlight",
        boxShadow: "md",
        color:"white",
        transform: "scale(1.03)",
          borderRadius: "0",
     
      _hover: {
         bg: "secondary",
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
