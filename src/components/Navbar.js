import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';

import Container from '../layouts/Container';

export default function Navbar() {
  return (
    <Wrapper>
      <Container>
        <NavbarBrand>Metapixi</NavbarBrand>
        <Social>
          <a href="https://twitter.com/jnafolayan">
            <FaTwitter />
          </a>
          <a href="https://github.com/jnafolayan">
            <FaGithub />
          </a>
        </Social>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 18px 0;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const NavbarBrand = styled.a`
  color: hsl(130, 100%, 42%);

  &:hover {
    text-decoration: none;
  }
`;

const Social = styled.div`
  a {
    marin-left: 12px;
    color: rgba(30,30,30,0.95);

    &:hover {
      border-bottom: 1px solid hsl(130, 100%, 42%);
    }
  }
`;
