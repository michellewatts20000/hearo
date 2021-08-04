import React from "react";
import { Box, Text } from "@chakra-ui/react";

const SearchResults = (reviews) => {
  // const reviews = user.user.review;
  // const all = user.user;
  console.log("searchresults", reviews);

  // const places = reviews.reviews;

  // console.log("searchresults2", places);

  // console.log(all.place.placeName);

  // console.log(fullarray.review[0]);

  // if (!reviews) {
  //   return <h3>No Results Found</h3>;
  // }

  return (
    <Box>
      {/* {reviews.map((review, index) => (
        <Box key={index}>
          <Text>Name: {review.placeName}</Text>
          <Text mb={5}>Location: {review.placeLocation}</Text>
        </Box>
      ))} */}
    </Box>
  );
};

export default SearchResults;
