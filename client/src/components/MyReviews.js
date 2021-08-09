import React from "react";
import { Text, Link, Box } from "@chakra-ui/react";

const MyReviews = (user) => {
  const reviews = user.user.review;
  console.log("reviews", reviews);

  if (reviews.length === 0) {
    return (
      <Box w="100%">
        <Text variant="lowkey">
          You have no reviews yet. Please add one by filling out the form.
        </Text>
      </Box>
    );
  }

  return (
    <>
      {reviews.map((review, index) => (
        <Box p={"15px"} borderColor={"white"} border={"1px solid"} key={index}>
          <Text variant="h4">{review.place.placeName}</Text>
          <Text>'{review.rating}' loudness rating</Text>
          {review.comment === "" ? (
            <Text></Text>
          ) : (
            <Text>Comment: {review.comment}</Text>
          )}
          <Text>{review.createdAt}</Text>
          <Link variant={"highlight"} href={`/places/${review.place._id}`}>
            Link to {review.place.placeName}
          </Link>
        </Box>
      ))}
    </>
  );
};

export default MyReviews;
