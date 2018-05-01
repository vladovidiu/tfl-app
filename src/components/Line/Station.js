import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const Station = ({ station, onClick }) => {
    const returnStation = () => onClick(station);
    return (
        <List.Item onClick={returnStation}>
            <List.Content>
                <List.Header as="a">{station.name}</List.Header>
            </List.Content>
        </List.Item>
    );
};

Station.propTypes = {
    station: PropTypes.object.isRequired,
};

export default Station;
