import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import Station from './Station';

const LineStations = ({ line, stations }) => {
    return (
        <div>
            <h2>{line} line stations</h2>
            <List horizontal ordered>
                {stations.map(station => <Station station={station} key={station.name} />)}
            </List>
        </div>
    );
};

export default LineStations;
