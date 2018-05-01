import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Header = ({ appName }) => (
    <div className="ui one item inverted menu">
        <NavLink className="item" activeClassName="active" exact to="/">
            {appName}
        </NavLink>
    </div>
);

Header.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default Header;
