import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FilmDetailShowtimes from './FilmDetailShowtimes';

const GET_FILM_WITH_SHOWTIMES = gql`
  query GetFilmAndShowtimes($slug: ID!) {
    film(slug: $slug) {
      slug
      title
      releaseDate
      directors
      showtimeDays {
        dayFormatted
        cinemas {
          slug
          name
          showtimes {
            hourFormatted
          }
        }
      }
    }
  }
`;

type Data = {
  film: FilmWithShowtimeDays;
};

const FilmDetailShowtimesContainer: React.FC<{ slug: string }> = ({ slug }) => (
  <Query<Data> query={GET_FILM_WITH_SHOWTIMES} variables={{ slug }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error || !data) return `Error! ${error && error.message}`;

      return <FilmDetailShowtimes {...data.film} />;
    }}
  </Query>
);

export default FilmDetailShowtimesContainer;
