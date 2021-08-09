import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex align="center" w="100%" mb="10" mt="10">
      <Link variant={"black"} href="/">
      <Text align="center">
        HEARO &#169; 2021
      </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
