import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 7.5px;
  padding: 15px;
  background-color: white;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  @media (min-width: 721px) {
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-radius: 4px;
  }
`;

const List = styled.ol`
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  display: grid;
  grid-row-gap: 15px;
`;

const ListElement = styled.li`
  list-style: none;
`;

export { Card, List, ListElement };
