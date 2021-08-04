import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;
  const fullarray = user.user;

  console.log(reviews);
  console.log(fullarray);

  if (!reviews) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <Box>
      {reviews.map((review) => (
        <>
          <Text>Comment: {review.comment}</Text>
          <Text mb={5}>Rating: {review.rating}</Text>
        </>
      ))}
    </Box>
  );
};

export default MyReviews;
