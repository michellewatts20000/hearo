import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Box,
} from "@chakra-ui/react";

const PlaceList = ({
  places
}) => {
  if (!places.length) {
    return <Text>You haven't added any places yet</Text>;
  }

  return (
    <>
      {places.map((place) => (
          <Text>
            <Box mb={5}>
              <Text>Name: {place.placeName}</Text>
              <Text>Location: {place.placeLocation}</Text>
              <Text>Rating: {place.placeRating}</Text>
              <Text>Comment: {place.placeComment}</Text>
              <Text>When you added:: {place.createdAt}</Text>
              {(console.log("place", place))}
            </Box>
           
          </Text>
        ))}
    </>
  );
};

export default PlaceList;
