import React from 'react';

import FilmListElement from '../FilmListElement/FilmListElement';
import { List, ListElement } from './styled';

const FilmList: React.FC<{ films: Film[] }> = ({ films }) => (
  <List>
    {films.map(film => (
      <ListElement key={film.slug}>
        <FilmListElement
          slug={film.slug}
          encryptedUrlId={film.encryptedUrlId}
          title={film.title}
          scRating={film.scRating}
          releaseDate={film.releaseDate}
          directors={film.directors}
          description={film.description}
        />
      </ListElement>
    ))}
  </List>
);

export default FilmList;
