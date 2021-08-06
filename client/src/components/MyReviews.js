import React from "react";
import { Box, Text } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;

  console.log(reviews);

  if (!reviews) {
    return <Text>No reviews yet.</Text>
  }

  return (
    <Box>
      {reviews.map((review, index) => (
        <Box key={index}>
          <Text>Place: {review.place.placeName}</Text>
          <Text>Comment: {review.comment}</Text>
          <Text>Rating: {review.rating}</Text>
          <Text mb={5}>Date: {review.createdAt}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default MyReviews;
