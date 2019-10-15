import { config } from 'dotenv';
import { get } from 'lodash';

config();
const { env } = process;

const FILM_ID_CIPHER_KEY = get(env, 'FILM_ID_CIPHER_KEY', 'qcbziXxMbVMCG9Sw');
const FILM_ID_CIPHER_IV = get(env, 'FILM_ID_CIPHER_IV', '1rQMI97Oge0i0zKi');
const NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT = Number.parseInt(
  get(env, 'NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT', '12'),
  10
);
const PORT = get(env, 'PORT', 4000);
const SCRAPING_DATABASE_URL = get(
  env,
  'SCRAPING_DATABASE_URL',
  'mongodb://localhost:27017'
);
const CLOUDINARY_CLOUD_NAME = get(env, 'CLOUDINARY_CLOUD_NAME', '');
const CLOUDINARY_API_KEY = get(env, 'CLOUDINARY_API_KEY', '');
const CLOUDINARY_API_SECRET = get(env, 'CLOUDINARY_API_SECRET', '');
const SCRAPING_PROXY_URL = get(env, 'SCRAPING_PROXY_URL');
const SCRAPING_PROXY_PROTOCOL = get(env, 'SCRAPING_PROXY_PROTOCOL' || 'http');
const DATABASE_URL = get(
  env,
  'DATABASE_URL',
  'postgres://mcr_api_server:<password>@localhost/mcr'
);

export {
  FILM_ID_CIPHER_KEY,
  FILM_ID_CIPHER_IV,
  NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT,
  PORT,
  SCRAPING_DATABASE_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  SCRAPING_PROXY_URL,
  SCRAPING_PROXY_PROTOCOL,
  DATABASE_URL,
};
