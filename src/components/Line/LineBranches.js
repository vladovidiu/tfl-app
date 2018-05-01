import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import Branch from './Branch';

const LineBranches = ({ line, branches }) => {
    return (
        <div>
            <h2>{line} line branches</h2>
            <List celled className="ui center">
                {branches.map(branch => <Branch branch={branch} key={branch.name} />)}
            </List>
        </div>
    );
};

LineBranches.propTypes = {
    line: PropTypes.string.isRequired,
    branches: PropTypes.array.isRequired,
};

export default LineBranches;
