import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { QUERY_MY_REVIEWS } from "../utils/queries";

const MyReviews = (user) => {
  const { data, loading } = useQuery(QUERY_MY_REVIEWS, {
    variables: { userId: user },
  });

  console.log("user", user);
  console.log("data", data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <Text>list</Text>
    </Box>
  );
};

export default MyReviews;
