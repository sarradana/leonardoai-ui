import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true,
    uri: "https://rickandmortyapi.com/graphql", // Updated endpoint
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;