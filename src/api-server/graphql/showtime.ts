import { gql } from 'apollo-server-express';

import { getDayFormatted, getHourFormatted } from '../../utils';

const cinemasWithShowtimes = require('../../../mock-data/cinemas-with-showtimes.json');

const typeDefs = gql`
  type Showtime {
    date: DateTime!
    hourFormatted: String
    cinema: Cinema!
  }

  type ShowtimeDay {
    dayFormatted: String!
    cinemas: [Cinema]!
  }
`;

const resolvers = {
  hourFormatted: ({ date }: { date: string }) => {
    return getHourFormatted(new Date(date));
  },
  filmShowtimeDays: async ({ slug }: { slug: string }): Promise<any[]> => {
    const cinemas: { id: number; showtimes: any[] }[] =
      cinemasWithShowtimes[slug];

    const showtimeDays: any[] = [];
    cinemas.forEach(cinema => {
      cinema.showtimes.forEach(showtime => {
        const dayFormatted = getDayFormatted(showtime.date);
        const existingDay = showtimeDays.find(
          day => day.dayFormatted === dayFormatted
        );
        if (existingDay) {
          const existingCinemaForDay = existingDay.cinemas.find(
            (_cinema: any) => _cinema.id === cinema.id
          );
          if (existingCinemaForDay) {
            existingCinemaForDay.showtimes.push(showtime);
          } else {
            existingDay.cinemas.push({ ...cinema, showtimes: [showtime] });
          }
        } else {
          showtimeDays.push({
            dayFormatted,
            cinemas: [{ ...cinema, showtimes: [showtime] }],
          });
        }
      });
    });
    return showtimeDays;
  },
};

export { typeDefs, resolvers };
