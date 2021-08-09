import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function DbLevel({ title, icon, db }) {
  return (
    <Box mt={10}>
      <Text mb={1} variant="h3">
        {title}
      </Text>
      <Box mb={1} color={"primary"} fontSize={"40px"}>
        {icon}
      </Box>
      <Text variant="h2">{db}</Text>
    </Box>
  );
}
