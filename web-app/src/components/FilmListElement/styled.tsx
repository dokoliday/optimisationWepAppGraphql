import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../styled';

const Wrapper = styled(Card)`
  grid-template-columns: 100px auto;
`;

const Poster = styled.img`
  width: 100%;
`;

const InformationWrapper = styled.div``;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ReleaseYear = styled.span`
  font-size: 15px;
  color: gray;
`;

const Directors = styled.div`
  font-size: 15px;
  color: gray;
`;

const Description = styled.div`
  margin-top: 7.5px;
`;

const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: initial;
`;

export {
  Link,
  Wrapper,
  Poster,
  InformationWrapper,
  Title,
  ReleaseYear,
  Directors,
  Description,
};
