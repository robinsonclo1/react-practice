import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  margin: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;


export {Container, Title, Button, List, ListItem}; 
