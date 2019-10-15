import styled from 'styled-components';
import { Card, List, ListElement } from '../styled';

const showtimesThemeColor = '#f30a49';

const Wrapper = styled.div`
  display: grid;
  row-gap: 15px;
  margin: 0 auto;
  padding: 15px;
`;

const FilmHeading = styled.div``;

const Title = styled.h1`
  font-size: 30px;
  display: inline;
  font-weight: bold;
  margin: 0;
`;

const ReleaseYear = styled.span`
  font-size: 20px;
  color: gray;
`;

const Directors = styled.div`
  font-size: 20px;
  color: gray;
`;

const ShowtimesWrapper = styled(Card)`
  background-color: white;

  @media (min-width: 721px) {
    margin-bottom: 15px;
  }
`;

const ShowtimesTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const ShowtimeDayButtonGroup = styled.div`
  line-height: 32px;
`;

type ShowtimeDayButtonProps = {
  selected?: boolean;
};

const ShowtimeDayButton = styled.button<ShowtimeDayButtonProps>`
  color: ${({ selected }) => (selected ? 'white' : showtimesThemeColor)};
  padding: 4px 7px;
  background-color: ${({ selected }) =>
    selected ? showtimesThemeColor : 'white'};
  border: 1px solid ${showtimesThemeColor};
  border-radius: 12px;
  font-weight: bold;
  font-size: 12.5px;
  text-transform: uppercase;
  display: inline;
`;

const CinemaList = styled(List)`
  margin-bottom: 0;
`;

const CinemaListElement = styled(ListElement)`
  display: grid;
  padding-top: 15px;
  grid-row-gap: 11.25px;
  border-top: 1px solid #e6e6e6;
`;

const CinemaTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ShowtimesList = styled(List)`
  display: block;
  line-height: 30px;
`;

const ShowtimesListElement = styled(ListElement)`
  display: inline;
  padding: 2px 4px 3px;
  font-size: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

export {
  Wrapper,
  FilmHeading,
  Title,
  ReleaseYear,
  Directors,
  ShowtimesWrapper,
  ShowtimesTitle,
  ShowtimeDayButtonGroup,
  ShowtimeDayButton,
  CinemaList,
  CinemaListElement,
  CinemaTitle,
  ShowtimesList,
  ShowtimesListElement,
};
