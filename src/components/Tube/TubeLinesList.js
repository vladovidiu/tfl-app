import React from 'react';
import PropTypes from 'prop-types';
import TubeLines from './TubeLine';
import Spinner from '../common/Spinner';

const TubeLinesList = ({ lines }) => {
    return (
        <div>
            {lines.length === 0 ? (
                <Spinner />
            ) : (
                <div className="ui four doubling stackable cards">
                    {lines.map(line => <TubeLines key={line.id} line={line} />)}
                </div>
            )}
        </div>
    );
};

TubeLinesList.propTypes = {
    lines: PropTypes.array.isRequired,
};

export default TubeLinesList;
