import React, { Component, Fragment } from 'react';
import {
  Wrapper,
  Title,
  ReleaseYear,
  Directors,
  ShowtimesWrapper,
  ShowtimesTitle,
  FilmHeading,
  CinemaList,
  ShowtimeDayButton,
  ShowtimeDayButtonGroup,
  CinemaListElement,
  CinemaTitle,
  ShowtimesList,
  ShowtimesListElement,
} from './styled';
import { getYearFromDateString } from '../../utils';

class FilmDetailShowtimes extends Component<FilmWithShowtimeDays> {
  state = {
    selectedDay: this.props.showtimeDays.length && this.props.showtimeDays[0],
  };

  selectDay = (day: FilmShowtimeDay) => {
    this.setState({ selectedDay: day });
  };

  render() {
    const { title, releaseDate, directors, showtimeDays = [] } = this.props;
    const { selectedDay } = this.state;

    return (
      <Fragment>
        <Wrapper>
          <FilmHeading>
            <Title>{title}</Title>
            <ReleaseYear>{` (${getYearFromDateString(
              releaseDate
            )})`}</ReleaseYear>
            <Directors>{directors}</Directors>
          </FilmHeading>
        </Wrapper>
        <ShowtimesWrapper>
          <ShowtimesTitle>Séances</ShowtimesTitle>
          {selectedDay && (
            <Fragment>
              <ShowtimeDayButtonGroup>
                {showtimeDays.map(day => (
                  <Fragment key={day.dayFormatted}>
                    <ShowtimeDayButton
                      selected={day.dayFormatted === selectedDay.dayFormatted}
                      onClick={() => this.selectDay(day)}
                    >
                      {day.dayFormatted}
                    </ShowtimeDayButton>{' '}
                  </Fragment>
                ))}
              </ShowtimeDayButtonGroup>
              <CinemaList>
                {selectedDay.cinemas.map(cinema => (
                  <CinemaListElement key={cinema.slug}>
                    <CinemaTitle>{cinema.name}</CinemaTitle>
                    <ShowtimesList>
                      {cinema.showtimes.map(showtime => (
                        <Fragment key={showtime.hourFormatted}>
                          <ShowtimesListElement>
                            {showtime.hourFormatted}
                          </ShowtimesListElement>{' '}
                        </Fragment>
                      ))}
                    </ShowtimesList>
                  </CinemaListElement>
                ))}
              </CinemaList>
            </Fragment>
          )}
        </ShowtimesWrapper>
      </Fragment>
    );
  }
}

export default FilmDetailShowtimes;
