import React from 'react';
import { getLineDetails } from '../../actions/lineActions';

import LineBranches from './LineBranches';
import LineStations from './LineStations';
import Spinner from '../common/Spinner';

import { Grid } from 'semantic-ui-react';

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
            <div>
                {this.state.lineDetails.orderedLineRoutes ? (
                    <div>
                        <div className="padded-bottom-grid">
                            <LineBranches
                                branches={lineDetails.orderedLineRoutes}
                                line={lineDetails.lineName}
                            />
                        </div>
                        <Grid columns={2} divided stackable>
                            <Grid.Row>
                                <Grid.Column>
                                    <LineStations
                                        stations={lineDetails.stations}
                                        line={lineDetails.lineName}
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <LineStations
                                        stations={lineDetails.stations}
                                        line={lineDetails.lineName}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}

export default Test;
