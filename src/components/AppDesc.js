import React from 'react';
import styled from 'styled-components';
import { FaQuestion } from 'react-icons/fa';

import Container from '../layouts/Container';

export default function AppDesc() {
  return (
    <Container>
      <Paragraph>
        <span><FaQuestion /></span>
        <span>An easy way to hide any message in an image and share to people!</span>
      </Paragraph>    
    </Container>
  );
}

const Paragraph = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 600px;
  margin: 20px auto;

  span {
    padding: 20px 15px;
  }

  span:first-child {
    font-size: 1.5rem;
    color: #777;
  }

  span:last-child {
    color: #555;
    font-size: 1rem;
    border-left: 3px dashed #ddd;
  }

  @media (min-width: 468px) {
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(80,80,80,0.2);
    
    span {
      padding: 20px 30px;

      &:first-child {
        font-size: 2.3rem;
      }

      &:last-child {
        font-size: 1.5rem;
      }
    }
  }
`;
