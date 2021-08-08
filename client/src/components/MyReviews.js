import React from "react";
import {Text, Link, GridItem, Box } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;
  console.log("reviews", reviews);

  if (reviews.length === 0) {
    return  <Box><Text color="white">You have no reviews yet. Please add one by filling out the form.</Text></Box>
  }

  return (
    <>
      {reviews.map((review, index) => (
        <Box>
          <Text>Place: {review.place.placeName}</Text>
          <Text>Loudness rating: {review.rating}</Text>
          <Text>Comment: {review.comment}</Text>
          <Text >Date: {review.createdAt}</Text>
          <Link variant={"highlight"} href={`/places/${review.place._id}`}>Link to {review.place.placeName}</Link>
        </Box>
      ))}
    </>
  );
};

export default MyReviews;
