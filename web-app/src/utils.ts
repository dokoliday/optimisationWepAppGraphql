import truncate from 'lodash/truncate';

const getFilmPosterImageUrl = (id: string) =>
  `https://res.cloudinary.com/dh3qpkhir/image/upload/c_thumb,w_300/${id}.jpg`;

const getYearFromDateString = (date: string): string => date.slice(0, 4);

const getShortenedString = (string: string, length: number): string =>
  truncate(string, { length, separator: /,? +/, omission: '…' });

export { getFilmPosterImageUrl, getShortenedString, getYearFromDateString };
