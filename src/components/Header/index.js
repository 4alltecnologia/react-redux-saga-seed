import React from "react";

import { Link } from "react-router-dom";

import { Container, Header } from "./styles";

export default () => (
  <Container>
    <Header>
      Header
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Header>
  </Container>
);
