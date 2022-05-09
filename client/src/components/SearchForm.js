import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  Heading,
  Button,
  FormLabel,
  FormControl,
  Select,
  Text,
  Box,
  Link,
  Stack,
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import { QUERY_SEARCH } from "../utils/queries";
import { GiMagnifyingGlass } from "react-icons/gi";
import { motion } from "framer-motion";

const SearchForm = () => {
  const [formState, setFormState] = useState({
    placeType: "",
    rating: "",
  });

  const [placeSearch, { data, loading }] = useLazyQuery(QUERY_SEARCH);

  const reviews = data?.placeSearch || [];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await placeSearch({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
       <Stack direction={["column","column","column", "row"]} spacing="24px">
         <Box w={["100%", "100%", "100%", "40%"]} mr="10">
          <Heading mb={5}>Search for a quiet venue</Heading>
<form onSubmit={handleFormSubmit}>
          <FormControl isRequired id="place" mt={5}>
            <FormLabel>Type of venue</FormLabel>
            <Select
            variant="regular"
              onChange={handleChange}
              name="placeType"
              value={formState.placeType}
              placeholder="Select type of venue"
            >
              <option>Restaurant</option>
              <option>Bar</option>
              <option>Pub</option>
              <option>Cafe</option>
            </Select>
          </FormControl>

          <FormControl isRequired id="rating" mt={5} mb={7}>
            <FormLabel>Loudness rating</FormLabel>
            <Select
              onChange={handleChange}
              name="rating"
              value={formState.rating}
              variant="regular"
              placeholder="Loudness rating"
            >
              <option>Quiet</option>
              <option>Average</option>
              <option>Bit Loud</option>
              <option>Loud</option>
              <option>Very Loud</option>
              <option>Very Very Loud</option>
            </Select>
          </FormControl>
       {loading ? (
          <Button variant="primary">
            <Spinner color="gray.800" />
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </form>
      </Box>
 <Box w={["100%", "100%", "100%", "60%"]}>
{!data && (
    <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
            <Box
              mt={{ base: "0px", md: "20px", lg: "20px", xl: "20px" }}
              fontSize={{
                base: "150px",
                md: "250px",
                lg: "310px",
                xl: "400px",
              }}
              color="secondary"
              align="center"
            >
              <GiMagnifyingGlass />
            </Box>
          </motion.div>
    )}

           {data && reviews.length === 0 && (
<Text variant="lowkey"> There are no entries for this combination, please try another search.</Text>
    )}
       <SimpleGrid columns={[1, 1, 3, 3]} spacing="40px">
        {reviews.map((review, index) => (
           <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 10,
            }}
          >
           <Box p={"15px"} borderColor={"white"} border={"1px solid"} key={index}>
            <Text variant="h4">{review.place.placeName}</Text>
             {review.place.review.length === 1 ? (  <Text variant="h4">{review.place.review.length} review</Text>) : (
 <Text variant="h4">{review.place.review.length} reviews</Text>
             )}
            <Text>{review.place.placeLocation}</Text>
          
             {review.place.review.length === 1 ? (   <Link variant={"secondary"} href={`/places/${review.place._id}`}>See {review.place.placeName} review</Link>) : (
  <Link variant={"secondary"} href={`/places/${review.place._id}`}>See {review.place.placeName} reviews</Link>
             )}
          </Box>
          </motion.div>
        ))}
      </SimpleGrid>
      </Box>
      </Stack>
    </>
  );
};

export default SearchForm;
