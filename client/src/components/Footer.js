import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" mb="10" mt={10}>
      <Link href="/">
      <Text fontSize="sm" fontWeight="bold">
        HEARO &#169; 2021
      </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
