import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Cinema {
    slug: ID!
    name: String!
    showtimes: [Showtime]!
  }
`;

export { typeDefs };
