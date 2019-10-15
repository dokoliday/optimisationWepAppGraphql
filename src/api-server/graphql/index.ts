import { typeDefs as filmTypeDefs, resolvers as filmResolvers } from './film';
import { typeDefs as cinemaTypeDefs } from './cinema';
import {
  typeDefs as showtimeTypeDefs,
  resolvers as showtimeResolvers,
} from './showtime';
import { gql, ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { Connection } from 'typeorm';
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';

export type TGraphQLContext = {
  db: Connection;
};

const queryTypeDef = gql`
  scalar Date
  scalar DateTime

  type Query {
    filmsCurrentlyShowing(offset: Int!, limit: Int!): [Film]
    film(slug: ID!): Film
  }
`;

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Film: {
    showtimeDays: showtimeResolvers.filmShowtimeDays,
  },
  Showtime: {
    hourFormatted: showtimeResolvers.hourFormatted,
  },
  Query: {
    ...filmResolvers,
  },
};

const startApolloServer = () =>
  new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [queryTypeDef, filmTypeDefs, cinemaTypeDefs, showtimeTypeDefs],
      resolvers,
    }),
  });

export default startApolloServer;
