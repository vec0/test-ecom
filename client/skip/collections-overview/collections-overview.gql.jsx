import React, { Component } from "react";
import { ApolloClient, gql, Query } from "apollo-boost";
import collectionsOverviewComponent from "./collections-overview.component";
import WithSpinner from "../with-spinner-no-redux/with-spinner.component";

const GET_COLLECTIONS = gql`
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
`;

export default class CollectionsOverviewContainer extends Component {
  render() {
    return (
      <Query query={GET_COLLECTIONS}>
        {({ loading, error, data }) => {
          if (loading) return <WithSpinner></WithSpinner>;
          return (
            <collectionsOverviewComponent
              collections={data.collections}
            ></collectionsOverviewComponent>
          );
        }}
      </Query>
    );
  }
}
