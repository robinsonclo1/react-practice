import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>React Concepts Demos</Title>
      <Description>
        This application is a collection of demonstrations on various React concepts. Explore each page to see them in action!
      </Description>
      <List>
        <ListItem><Link to="/useEffect">useEffect</Link> - Understanding side effects in functional components.</ListItem>
        <ListItem><Link to="/useContext">useContext</Link> - Explore context API and its magic!</ListItem>
        <ListItem><Link to="/useReducer">useReducer</Link> - Handle complex state logic in components.</ListItem>
        <ListItem><Link to="/portals">Portals</Link> - Break out of the usual DOM hierarchy.</ListItem>
      </List>
    </Container>
  );
};

export default HomePage;