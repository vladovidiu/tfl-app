import React from 'react';
import { getLineDetails } from '../../actions/lineActions';

import LineBranches from './LineBranches';
import LineStations from './LineStations';
import Spinner from '../common/Spinner';

const API_ROOT = 'https://api.tfl.gov.uk/line';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineDetails: {},
        };
    }

    componentWillMount() {
        const {
            match: { params },
        } = this.props;
        getLineDetails(params.id).then(response => {
            this.setState({ lineDetails: response.data });
        });
    }

    render() {
        const { lineDetails } = this.state;
        return (
            <div className="ui grid">
                <div className="six wide column">
                    {this.state.lineDetails.orderedLineRoutes ? (
                        <LineBranches
                            branches={lineDetails.orderedLineRoutes}
                            line={lineDetails.lineName}
                        />
                    ) : (
                        <Spinner />
                    )}
                </div>
                <div className="ten wide column">
                    {this.state.lineDetails.orderedLineRoutes ? (
                        <LineStations stations={lineDetails.stations} line={lineDetails.lineName} />
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>
        );
    }
}

export default Test;
