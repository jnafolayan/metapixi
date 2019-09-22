import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';

import Container from '../layouts/Container';

export default function Navbar() {
  return (
    <Wrapper>
      <Container>
        <NavbarBrand href="/">Meta<span>pixi</span></NavbarBrand>
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
    align-items: center;
  }
`;

const NavbarBrand = styled.a`
  color: rgb(90,90,90);
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  letter-spacing: 0.05rem;
  font-family: "Trebuchet MS";

  span {
    color: hsl(130, 100%, 42%);
  }
`;

const Social = styled.div`
  a {
    margin-left: 12px;
    color: rgb(90,90,90);
    font-size: 1.8rem;

    &:hover {
      color: #000;
    }
  }
`;
