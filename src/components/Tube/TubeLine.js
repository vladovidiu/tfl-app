import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import './TubeLines.css';

const TubeLine = ({ line }) => {
    return (
        <Card className={'line-' + line.id}>
            <Card.Content>
                <Card.Header>{line.name}</Card.Header>
                <Card.Description>
                    {line.lineStatuses[0].statusSeverityDescription}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

TubeLine.propTypes = {
    line: PropTypes.object.isRequired,
};

export default TubeLine;
