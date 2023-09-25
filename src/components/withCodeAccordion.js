import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GitHubFetch } from '../utils/GitHubFetch';
import { Container } from '../styles/SharedStyles';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';  
import javascript from 'highlight.js/lib/languages/javascript';

const AccordionButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const CodeBlock = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

function withCodeAccordion(WrappedComponent, filePath) {
  return (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [codeContent, setCodeContent] = useState('');
    const codeRef = useRef(null);

    useEffect(() => {
      if (isOpen && codeRef.current) {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightElement(codeRef.current, { language: 'javascript' });
      }
    }, [isOpen, codeContent]);  // re-run effect when `isOpen` or `codeContent` changes

    const toggleAccordion = async () => {
      setIsOpen(!isOpen);
      if (!isOpen && !codeContent) {
        const content = await GitHubFetch(filePath);
        setCodeContent(content);
      }
    };

    return (
      <Container>
        <WrappedComponent {...props} />
        <AccordionButton onClick={toggleAccordion}>
          {isOpen ? 'Hide Code' : 'Show Code'}
        </AccordionButton>
        {isOpen && (
          <CodeBlock>
            <pre><code ref={codeRef} className="javascript">{codeContent}</code></pre>
          </CodeBlock>
        )}
      </Container>
    );
  };
}

export default withCodeAccordion;