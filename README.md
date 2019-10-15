## Environment setup

- Set configuration variables as environment variables or in a `.env` file (see `.env.example`)

## Scraping cinemas (showtimes) and films

- Fetch and scrape cinemas with current showtimes:

```
# If not built already: `npm run build`
npm run fetch-scrape-cinemas
```

- Fetch and scrape films not already in database, based on films that belong to scraped cinemas:

```
# If not built already: `npm run build`
npm run fetch-scrape-films
```

- Fetch and scrape all films already in database:

```
# If not built already: `npm run build`
npm run fetch-scrape-films -- --all
```

- Write reports about scraped data:

```
# If not built already: `npm run build`
npm run write-report-scraped-cinemas
npm run write-report-scraped-films
```

## Inserting scraped films and showtimes

- Insert scraped films and showtimes, update films:

```
# If not built already: `npm run build`
npm run insert-update-scraped-films
npm run insert-scraped-showtimes
```

## Running migrations

- To run (or revert) a migration:

```
# If not built already: `npm run build`
npm run database-migration:run
npm run database-migration:revert
```

## Creating new migrations

- To create a new migration, run this command (replace `InsertParisCinemas` by the name of your choice):

```
npm run database-migration:create -- InsertParisCinemas
```

- To generate a new migration based on entity change:

```
# If not built already: `npm run build`
npm run database-migration:generate -- CreateCinemaTable
```
# optimisationWepAppGraphql
