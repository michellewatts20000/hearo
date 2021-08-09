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
         bgGradient: "linear(to-l, highlight,secondary)",
      color: "white.200",
      borderRadius: "0",
      },
  }),
  hamburger: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "gray.800",
      color: "gray.800",
      _hover: {
       
      },
  }),
},

  defaultprops: {},
};
