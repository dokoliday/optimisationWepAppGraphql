import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import FilmList from './FilmList';

const GET_FILMS_CURRENTLY_SHOWING = gql`
  query GetFilmsCurrentlyShowing {
    filmsCurrentlyShowing(offset: 0, limit: 15) {
      slug
      encryptedUrlId
      title
      scRating
      releaseDate
      directors
      description
    }
  }
`;

type Data = {
  filmsCurrentlyShowing: Film[];
};

const FilmListContainer: React.FC = () => (
  <Query<Data> query={GET_FILMS_CURRENTLY_SHOWING}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error || !data) return `Error! ${error && error.message}`;

      return <FilmList films={data.filmsCurrentlyShowing} />;
    }}
  </Query>
);

export default FilmListContainer;
