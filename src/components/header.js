import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
);

export default Header;
