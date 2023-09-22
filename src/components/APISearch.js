import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Title, List } from '../styles/SharedStyles'
import axios from 'axios';

const SearchBar = styled.input`
    width: 60%;
    padding: 10px;
    margin: 20px auto;
    border-radius: 5px;
    border: 2px solid #ddd;
    font-size: 16px;
`;

const Card = styled.li`
    background: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const RepoLink = styled.a`
    font-size: 18px;
    font-weight: bold;
    color: #0366d6;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const RepoInfo = styled.div`
    margin-top: 10px;
`;

const Author = styled.div`
    font-size: 16px;
    color: #586069;
`;

const Description = styled.div`
    margin-top: 8px;
    color: #24292e;
`;

function APISearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [debounceTimeoutId, setDebounceTimeoutId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchResults = async (query) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`);
        setResults(response.data.items);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      clearTimeout(debounceTimeoutId);
      if (query) {
        setDebounceTimeoutId(setTimeout(() => fetchResults(query), 300));
      } else {
        setResults([]);
      }
    }, [query, debounceTimeoutId]);
  
    return (
      <Container>
        <Title>API Search with Debouncing</Title>
        <SearchBar 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <List>
          {results.map((result, index) => (
              <Card key={index}>
                  <RepoLink href={result.html_url} target="_blank" rel="noopener noreferrer">
                      {result.name}
                  </RepoLink>
                  <RepoInfo>
                      <Author>By: {result.owner.login}</Author>
                      <Description>{result.description}</Description>
                  </RepoInfo>
              </Card>
          ))}
        </List>
      </Container>
    );
}
  
export default APISearch;
