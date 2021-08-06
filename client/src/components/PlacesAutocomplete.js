import React, { useState, useEffect, useRef } from "react";
import { FormLabel, FormControl, Input } from "@chakra-ui/react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  const center = { lat: -33.865143, lng: 151.2099 };
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      bounds: defaultBounds,
      types: ["establishment"],
      componentRestrictions: { country: "au" },
      fields: ["name"],
    }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log("addressobject", addressObject);
  console.log("query", query);
}

function PlacesAutocomplete() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&type=restaurant`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <>
      <FormControl isRequired>
        <FormLabel>Where are you?</FormLabel>
        <Input
          ref={autoCompleteRef}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter Place"
          value={query}
        />
      </FormControl>
      {/* <FormControl isRequired id="suburb" mt={5}>
        <FormLabel>Suburb</FormLabel>
        <Input
          placeholder="Suburb"
          name="placeLocation"
          // value={query.placeLocation}
        />
      </FormControl> */}
    </>
  );
}

export default PlacesAutocomplete;
