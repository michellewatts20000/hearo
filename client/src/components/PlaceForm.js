import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import PlacesAutocomplete from "../components/PlacesAutocomplete";
import {
  Heading,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  Textarea,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react";
import { ADD_PLACE } from "../utils/mutations";
import { QUERY_REVIEWS, QUERY_ME } from "../utils/queries";

const PlaceForm = () => {
  const [formState, setFormState] = useState({
    placeName: "",
    placeLocation: "",
    placeType: "",
    rating: "",
    comment: "",
  });

  const [addPlace, { error, loading }] = useMutation(ADD_PLACE, {
    update(cache, { data: { addPlace } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });
        console.log("reviews", reviews);
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addPlace, ...reviews] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, review: [...me.review, addPlace] } },
      });
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      await addPlace({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      placeName: "",
      placeLocation: "",
      placeType: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <Box>
      <form onSubmit={handleFormSubmit}>
        <PlacesAutocomplete setFormState={setFormState} />

        <FormControl isRequired id="suburb" mt={5}>
          <FormLabel>Location</FormLabel>
          <Input
            onChange={handleChange}
            placeholder="Suburb"
            name="placeLocation"
            value={formState.placeLocation || ""}
          />
        </FormControl>
        <FormControl isRequired id="place" mt={5}>
          <FormLabel>Type of place</FormLabel>
          <Select
            onChange={handleChange}
            name="placeType"
            value={formState.placeType || ""}
            placeholder="Select type of place"
          >
            <option>Restaurant</option>
            <option>Bar</option>
            <option>Pub</option>
            <option>Cafe</option>
          </Select>
        </FormControl>
        <FormControl isRequired id="rating" mt={5}>
          <FormLabel>Loudness rating</FormLabel>
          <Select
            onChange={handleChange}
            placeholder="Rating"
            name="rating"
            value={formState.rating || ""}
          >
            <option>Quiet</option>
            <option>Average</option>
            <option>Bit Loud</option>
            <option>Loud</option>
            <option>Very Loud</option>
            <option>Very Very Loud</option>
          </Select>
        </FormControl>
        <FormControl mt={5} mb={7} id="comment">
          <FormLabel>Comment</FormLabel>
          <Textarea
            onChange={handleChange}
            placeholder="Comment"
            name="comment"
            value={formState.comment || ""}
          />
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
        {error && (
          <Alert mt={10} status="warning" color="black">
            <AlertIcon />
            <AlertDescription color="black"> {error.message}</AlertDescription>
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default PlaceForm;
