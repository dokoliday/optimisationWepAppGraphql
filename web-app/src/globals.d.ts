type Film = {
  slug: string;
  encryptedUrlId: string;
  title: string;
  scRating: number | null;
  releaseDate: string;
  directors: string;
  description: string;
};

interface FilmWithShowtimeDays extends Film {
  showtimeDays: FilmShowtimeDay[];
}

type Cinema = {
  slug: string;
  name: string;
  showtimes: Showtime[];
};

type Showtime = {
  hourFormatted: string;
};

type FilmShowtimeDay = {
  dayFormatted: string;
  cinemas: Cinema[];
};
