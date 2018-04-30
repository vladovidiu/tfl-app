import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const formatBranchName = name => {
    return name.replace('&harr;', '↔');
};

const Branch = ({ branch }) => (
    <List.Item>
        <List.Content>
            <List.Header as="span">{formatBranchName(branch.name)}</List.Header>
        </List.Content>
    </List.Item>
);

export default Branch;
