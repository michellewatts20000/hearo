import React from "react";
import { Heading, Text, Box, Stack, Spinner, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";

import { QUERY_PLACE_REVIEWS } from "../utils/queries";

const PlaceDetails = () => {
  // Use `useParams()` to retrieve value of the route parameter `:placeId`
  const { placeId } = useParams();

  const { loading, data } = useQuery(QUERY_PLACE_REVIEWS, {
    variables: { placeId: placeId },
  });

  const place = data?.placeReviews || {};

  if (loading) {
    return <Spinner color="primary"/>
  }
  return (
    <Stack>
      <Box mb={5}>
      <Heading mb={5}>{place[0].place.placeName} reviews</Heading>
      <Text variant="placeDetails">{place[0].place.placeType}: {place[0].place.placeLocation}</Text>
      
      </Box>

      <SimpleGrid columns={{sm: 1, md: 2, lg:4}} spacing={10}>
        {place.map((item, index) => (
            <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
          <Box p="15px"  border="1px solid" borderColor="black" key={index}>
            <Text variant="h4" mb={1}>Loudness rating: {item.rating}</Text>
            {item.comment === "" ? ( <Text></Text>) : (
<Text>Comment: {item.comment}</Text>
             )}
            <Text>{item.createdAt}</Text>
            <Text>Author: {item.user.username}</Text>
          </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default PlaceDetails;
