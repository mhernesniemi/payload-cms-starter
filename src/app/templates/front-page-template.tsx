"use client";

import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import createClient from "@searchkit/instantsearch-client";

const searchClient = createClient({
  url: "/api/search",
});

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="articles">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
