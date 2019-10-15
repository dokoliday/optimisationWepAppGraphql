import React from 'react';
import styled from 'styled-components';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import FilmListContainer from './components/FilmList/Container';
import FilmDetailShowtimesContainer from './components/FilmDetailShowtimes/Container';

const Main = styled.main`
  max-width: 720px;
  margin: 0 auto;
`;

interface FilmDetailShowtimesContainerRouteMatchParams {
  slug: string;
}

interface FilmDetailShowtimesContainerRouteProps
  extends RouteComponentProps<FilmDetailShowtimesContainerRouteMatchParams> {
  slug?: string;
}

const App: React.FC = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={FilmListContainer} />
      <Route
        path="/films/:slug"
        render={({ match }: FilmDetailShowtimesContainerRouteProps) => (
          <FilmDetailShowtimesContainer slug={match.params.slug} />
        )}
      />
    </Switch>
  </Main>
);
export default App;
