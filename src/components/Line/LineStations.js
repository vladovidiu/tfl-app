import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import Station from './Station';

const compareStationsNames = (first, second) => {
    if (first.name < second.name) return -1;
    if (first.name > second.name) return 1;
    return 0;
};

const LineStations = ({ line, stations, onClick }) => {
    return (
        <div>
            <h2>{line} line stations</h2>
            <List bulleted>
                {stations
                    .sort(compareStationsNames)
                    .map(station => (
                        <Station station={station} key={station.name} onClick={onClick} />
                    ))}
            </List>
        </div>
    );
};

LineStations.propTypes = {
    line: PropTypes.string.isRequired,
    stations: PropTypes.array.isRequired,
};

export default LineStations;
