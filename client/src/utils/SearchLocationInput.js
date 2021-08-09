import React, { useState, useEffect, useRef } from "react";
import { FormLabel, FormControl, Input } from "@chakra-ui/react";

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
    north: center.lat + 0.01,
    south: center.lat - 0.01,
    east: center.lng + 0.01,
    west: center.lng - 0.01,
  };

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {
      bounds: defaultBounds,
      fields: ["name"],
      types: ["establishment"],
      componentRestrictions: { country: "au" },
    }
  );
  autoComplete.setFields(["name"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key={APIKeyHERE}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <FormControl mt={5} id="name" isRequired>
      <FormLabel>Place Name</FormLabel>
      <Input
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        name="placeLocation"
        placeholder="Name"
        ref={autoCompleteRef}
      />
    </FormControl>
  );
}

export default SearchLocationInput;
