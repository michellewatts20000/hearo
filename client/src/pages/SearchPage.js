import React from "react";
import { useQuery } from "@apollo/client";

import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import { QUERY_SEARCH } from "../utils/queries";

const Search = () => {
  const { loading, data } = useQuery(QUERY_SEARCH);
  const reviews = data?.allPlaces2 || [];

  console.log(data);
  console.log(reviews);

  return (
    <>
      <SearchForm />
      <SearchResults reviews={reviews} />
    </>
  );
};

export default Search;
