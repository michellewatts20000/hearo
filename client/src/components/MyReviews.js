import React from "react";
import { Box, Text, Link, SimpleGrid, Heading, GridItem } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;


  console.log("reviews", reviews);
  // console.log("id", reviews._id);

  if (!reviews) {
    return <Text>No reviews yet.</Text>
  }

  return (
   
    <>
      {reviews.map((review, index) => (
        <GridItem colSpan={4} key={index}>
          <Text>Place: {review.place.placeName}</Text>
          <Text>Location: {review.place.placeLocation}</Text>
          <Text>Comment: {review.comment}</Text>
          <Text>Loudness rating: {review.rating}</Text>
          <Text >Date: {review.createdAt}</Text>
          <Link variant={"highlight"} href={`/places/${review.place._id}`}>Link to {review.place.placeName}</Link>
        </GridItem>
      ))}

    </>
  );
};

export default MyReviews;
