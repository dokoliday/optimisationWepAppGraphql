import slugify from 'slugify';
import { createCipheriv, createDecipheriv } from 'crypto';
import moment from 'moment';

import { FILM_ID_CIPHER_IV, FILM_ID_CIPHER_KEY } from './config';
import { tz } from 'moment-timezone';
import { TIMEZONE } from './constants';

const ENCRYPTION_ALGORITHM = 'aes-128-cbc';

const encrypt = (text: string): string => {
  const cipher = createCipheriv(
    ENCRYPTION_ALGORITHM,
    FILM_ID_CIPHER_KEY,
    FILM_ID_CIPHER_IV
  );
  return `${cipher.update(text, 'utf8', 'hex')}${cipher.final('hex')}`;
};

const decrypt = (text: string): string => {
  const decipher = createDecipheriv(
    ENCRYPTION_ALGORITHM,
    FILM_ID_CIPHER_KEY,
    FILM_ID_CIPHER_IV
  );
  return `${decipher.update(text, 'hex', 'utf8')}${decipher.final('utf8')}`;
};

const _slugify = (text: string) =>
  slugify(text, {
    remove: /[*+~.,;()'"!:@—–]/g,
    lower: true,
  });

const getCinemaSlug = (name: string, city: string, zipCode: string): string => {
  const baseParts = `${name}-${city}`;
  const parts =
    city === 'Paris' ? `${baseParts}-${zipCode.slice(3, 5)}` : baseParts;
  return _slugify(parts);
};

const getFilmSlug = (
  title: string,
  releaseDate: Date,
  directors: string
): string => {
  const releaseYear = releaseDate.getUTCFullYear();
  return _slugify(`${title}-${releaseYear}-${directors}`);
};

const getNumberOrNull = (number: number): number | null =>
  Number.isNaN(number) ? null : number;

const getNumberOrZero = (number: number): number =>
  Number.isNaN(number) ? 0 : number;

const parseDate = (year: number | null, fullDate: string | null): Date => {
  if (!year) {
    throw new Error('Could not parse date without year.');
  }
  const date = fullDate ? new Date(fullDate) : new Date(year.toString());
  return date;
};

const parseDateWithTimeInParis = (date: string, time: string): Date =>
  tz(`${date} ${time}`, TIMEZONE).toDate();

const parseInteger = (numberAsString: string): number =>
  Number.parseInt(numberAsString, 10);

const getMillisecondsFromHours = (
  NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT: number
): number => {
  return NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT * 60 * 60 * 1000;
};

const doStringsMatchCaseInsensitive = (
  string1: string,
  string2: string
): boolean => new RegExp('^' + string1 + '$', 'i').test(string2);

const getDayFormatted = (date: Date) =>
  moment(date, 'YYYY-MM-DD', 'fr')
    .tz(TIMEZONE)
    .format('dddd D');

const getHourFormatted = (date: Date) =>
  moment(date, 'YYYY-MM-DD', 'fr')
    .tz(TIMEZONE)
    .format('HH:mm');

export {
  encrypt,
  decrypt,
  getCinemaSlug,
  getFilmSlug,
  getMillisecondsFromHours,
  getNumberOrNull,
  getNumberOrZero,
  parseDate,
  parseDateWithTimeInParis,
  parseInteger,
  doStringsMatchCaseInsensitive,
  getDayFormatted,
  getHourFormatted,
};
