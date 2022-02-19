/* import React, { Component } from "react";
import { ApolloClient, gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import collectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner-no-redux.components";
import { CollectionPage } from "./collection.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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
`;

const CollectionPageGql = ({ match }) => {
  const {
    loading,
    data: { getCollectionsByTitle },
  } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId },
  });

  if (loading) return <WithSpinner />;
  return <CollectionPage collection={getCollectionsByTitle} />;
};

export default CollectionPageGql;
 */
