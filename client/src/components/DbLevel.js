import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function DbLevel({ title, icon, db }) {
  return (
    <Box align="center" mt={10}>
      <Text mb={2} variant="h3">
        {title}
      </Text>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
      <Box mb={2} color={"secondary"} fontSize={"60px"}>
        {icon}
      </Box></motion.div>
      <Text variant="h2">{db}</Text>
    </Box>
  );
}
