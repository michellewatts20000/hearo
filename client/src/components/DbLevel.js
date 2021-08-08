import React from "react";
import { Text, Box, Center } from "@chakra-ui/react";



export default function DbLevel({ title, icon, db }) {
  return (
  
    <Box align="center" mt={10}>
            <Text mb={3} variant="h3">{title}</Text>
            <Box mb={3} color={"primary"} fontSize={"40px"}>{icon}</Box>
            <Text variant="h2">{db}</Text>
          </Box>
       

  );
};

