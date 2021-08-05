import React from "react";
import { useQuery } from "@apollo/client";

import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const Search = () => {
  return (
    <>
      <SearchForm />
      <SearchResults />
    </>
  );
};

export default Search;
