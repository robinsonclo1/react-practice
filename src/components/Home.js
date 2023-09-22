import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Title, List, ListItem } from '../styles/SharedStyles'

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>React Concepts Demos</Title>
      <Description>
        This application is a collection of demonstrations on various React concepts. Explore each page to see them in action!
      </Description>
      <List>
        <ListItem><Link to="/apisearch">API Search</Link> - Debouncing, useEffect, & the github API to create a search.</ListItem>
        <ListItem><Link to="/useContext">useContext</Link> - Explore context API and its magic!</ListItem>
        <ListItem><Link to="/useReducer">useReducer</Link> - Handle complex state logic in components.</ListItem>
        <ListItem><Link to="/portals">Portals</Link> - Break out of the usual DOM hierarchy.</ListItem>
        <ListItem><Link to="/montyHall">Monty Hall</Link> - But wait, there's more! Using Debouncing for a Monty Hall Problem.</ListItem>
      </List>
    </Container>
  );
};

export default HomePage;