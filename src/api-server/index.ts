import compression from 'compression'
import express from 'express';
import startApolloServer from './graphql';
import { PORT } from '../utils/config';

const startServer = async (): Promise<void> => {
  const app = express();
  const apolloServer = startApolloServer();
  app.use(compression());

  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: true,
    },
  });

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 API server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    )
  );
};

startServer();
