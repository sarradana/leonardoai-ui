import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        name
        id
        status
        image
      }
    }
  }
`;
