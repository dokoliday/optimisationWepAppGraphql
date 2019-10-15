import React from 'react';

import {
  getFilmPosterImageUrl,
  getYearFromDateString,
  getShortenedString,
} from '../../utils';
import {
  Link,
  Wrapper,
  Poster,
  InformationWrapper,
  Title,
  ReleaseYear,
  Directors,
  Description,
} from './styled';

const FilmListElement: React.FC<Film> = ({
  slug,
  encryptedUrlId,
  title,
  releaseDate,
  directors,
  description,
}) => (
  <Link to={`/films/${slug}`}>
    <Wrapper>
      <Poster src={getFilmPosterImageUrl(encryptedUrlId)} />
      <InformationWrapper>
        <Title>{title}</Title>
        <ReleaseYear>{` (${getYearFromDateString(releaseDate)})`}</ReleaseYear>
        <Directors>{directors}</Directors>
        <Description>{getShortenedString(description, 200)}</Description>
      </InformationWrapper>
    </Wrapper>
  </Link>
);

export default FilmListElement;
