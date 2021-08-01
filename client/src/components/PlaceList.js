import React from 'react';
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
        <div key={place._id}>
          
            <Box  mb={5}>
              <Text>Name: {place.placeName}</Text>
              <Text>Location: {place.placeLocation}</Text>
              <Text>Rating: {place.placeRating}</Text>
              <Text>Comment: {place.placeComment}</Text>
              <Text>When you added: {place.createdAt}</Text>
              {(console.log("place", place))}
            </Box>
           
       
          </div>
        ))}
    </>
  );
};

export default PlaceList;
