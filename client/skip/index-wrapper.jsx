import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";

export default function IndexWrapper() {
  //state = { test: "IndexWrapper" };

  let location = useLocation();
  // let navigate = useNavigate();
  return <App location={location} />;
}

/* 
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});

client
  .query({
    query: gql`
      {
        getCollectionsByTitle(title: "hats") {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `,
  })
  .then((res) => {
    console.log(res);
  }); 
    <ApolloProvider client={client}>
    </ApolloProvider>
  */
