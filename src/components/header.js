import React from 'react';
import styled, { css } from 'react-emotion';
import { TextLink, Spacer, border } from './styled';
import { Router } from '@reach/router';

const Head = styled('header')`
  font-family: Avenir;
  border-bottom: ${border};
  padding: 0.5em;
  display: flex;
  align-items: center;
`;

export const Arrow = () => (
  <div
    className={css`
      font-weight: 900;
      font-size: 2em;
      margin: 1em;
    `}
  >
    ⟨
  </div>
);

const Back = ({ week, page }) => (
  <TextLink to={page ? `/${week}` : `/`}>
    <Arrow />
  </TextLink>
);

const FakeBack = () => (
  <Spacer>
    <Arrow />
  </Spacer>
);

const Header = ({ siteTitle }) => (
  <Head>
    <Router>
      <Back path="/:week/:page" />
      <Back path="/:week" />
      <FakeBack default />
    </Router>
    <h1>
      <TextLink to="/">{siteTitle}</TextLink>
    </h1>
  </Head>
);

export default Header;
