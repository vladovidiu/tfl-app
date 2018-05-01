import React from 'react';
import { getLineDetails, getArrivals } from '../../actions/lineActions';

import LineBranches from './LineBranches';
import LineStations from './LineStations';
import StationDetails from './StationDetails';
import Spinner from '../common/Spinner';

import { Grid } from 'semantic-ui-react';
import Branch from './Branch';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineDetails: {},
            selectedStation: null,
            stationArrivals: [],
            loading: false,
        };

        this.handleStationSelect = this.handleStationSelect.bind(this);
    }

    componentWillMount() {
        const {
            match: { params },
        } = this.props;
        getLineDetails(params.id).then(response => {
            this.setState({ lineDetails: response.data });
        });
    }

    handleStationSelect(station) {
        this.setState({
            selectedStation: station,
            loading: true,
        });
        const { stopPointSequences: branches } = this.state.lineDetails;
        const stop = branches
            .map(branch => {
                return branch.stopPoint.find(stop => {
                    if (stop.parentId === station.id) return stop;
                });
            })
            .filter(Boolean)[0];

        const {
            match: { params },
        } = this.props;

        stop &&
            getArrivals(stop.id).then(response => {
                const { data } = response;
                const arrivals = data.filter(arrival => arrival.lineId === params.id);

                this.setState({ stationArrivals: arrivals, loading: false });
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
                                        onClick={this.handleStationSelect}
                                    />
                                </Grid.Column>
                                {this.state.selectedStation ? (
                                    !this.state.loading ? (
                                        <Grid.Column>
                                            <StationDetails
                                                station={this.state.selectedStation}
                                                arrivals={this.state.stationArrivals}
                                            />
                                        </Grid.Column>
                                    ) : (
                                        <Spinner />
                                    )
                                ) : null}
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
