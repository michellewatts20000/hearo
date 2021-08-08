import React from "react";
import {Text, Link, GridItem } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;
  console.log("reviews", reviews);

  if (reviews.length === 0) {
    return  <GridItem colSpan={4}><Text color="white">You have no reviews yet. Please add one by filling out the form.</Text></GridItem>
  }

  return (
   
    <>
      {reviews.map((review, index) => (
        <GridItem colSpan={4} key={index}>
          <Text>Place: {review.place.placeName}</Text>
          <Text>Loudness rating: {review.rating}</Text>
          <Text>Comment: {review.comment}</Text>
          <Text >Date: {review.createdAt}</Text>
          <Link variant={"highlight"} href={`/places/${review.place._id}`}>Link to {review.place.placeName}</Link>
        </GridItem>
      ))}

    </>
  );
};

export default MyReviews;
