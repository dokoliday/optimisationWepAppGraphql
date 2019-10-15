import { gql } from 'apollo-server-express';

const filmsCurrentlyShowing = require('../../../mock-data/films-currently-showing.json');

const typeDefs = gql`
  type Film {
    slug: ID!
    scUrl: String!
    scRating: Float
    title: String!
    encryptedUrlId: String!
    releaseDate: Date!
    directors: String!
    description: String!
    showtimeDays: [ShowtimeDay]!
  }
`;

const resolvers = {
  filmsCurrentlyShowing: (_parent: any) => filmsCurrentlyShowing,
  film: (_parent: any, { slug }: { slug: string }) => {
    return filmsCurrentlyShowing.find((film: any) => film.slug === slug);
  },
};

export { typeDefs, resolvers };
