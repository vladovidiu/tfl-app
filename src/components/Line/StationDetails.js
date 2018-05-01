import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { List } from 'semantic-ui-react';

const StationDetails = ({ station, arrivals }) => {
    const inbound = arrivals.filter(arrival => arrival.direction === 'inbound');
    const outbound = arrivals.filter(arrival => arrival.direction === 'outbound');
    return (
        <div>
            <h2>{station.name} arrivals</h2>
            <h3>Inbound</h3>
            <List relaxed>
                {inbound.map(arrival => (
                    <div key={arrival.id}>
                        {arrival.towards} - {moment(arrival.expectedArrival).fromNow()}
                    </div>
                ))}
            </List>
            <h3>Outbound</h3>
            <List relaxed>
                {outbound.map(arrival => (
                    <div key={arrival.id}>
                        <div key={arrival.id}>
                            {arrival.towards} - {moment(arrival.expectedArrival).fromNow()}
                        </div>
                    </div>
                ))}
            </List>
        </div>
    );
};

StationDetails.propTypes = {
    station: PropTypes.object.isRequired,
};

export default StationDetails;
