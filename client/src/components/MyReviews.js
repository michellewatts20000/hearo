import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;

  // console.log(fullarray.review[0]);

  if (!reviews) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <Box>
      {reviews.map((review, index) => (
        <Box key={index}>
          <Text>Comment: {review.comment}</Text>
          <Text mb={5}>Rating: {review.rating}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default MyReviews;
