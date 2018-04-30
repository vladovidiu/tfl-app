import React from 'react';
import PropTypes from 'prop-types';
import { fetchLineStatus } from '../../actions/tubeActions';

import { Card } from 'semantic-ui-react';

import Spinner from '../common/Spinner';

import './TubeLines.css';

const POLLING_TIME = 60 * 1000;

class TubeLine extends React.Component {
    constructor() {
        super();
        this.interval = null;
        this.state = {
            status: '',
            disruptions: [],
            loading: true,
        };
    }

    fetchLineStatus() {
        const { line } = this.props;
        this.setState({ loading: true });
        fetchLineStatus(line.id).then(response => {
            const { data } = response;
            const { lineStatuses } = data[0];
            this.setState({
                status: lineStatuses[0].statusSeverityDescription,
                loading: false,
            });
        });
    }

    componentDidMount() {
        this.fetchLineStatus();
        this.interval = setInterval(() => this.fetchLineStatus(), POLLING_TIME);
    }

    componentWillUnmount() {
        this.interval = null;
    }

    render() {
        const { line } = this.props;
        return (
            <Card className={'line-' + line.id + ' clickable'} href={'/line/' + line.id}>
                <Card.Content>
                    <Card.Header>{line.name}</Card.Header>
                    <Card.Description>
                        {this.state.loading ? <Spinner /> : this.state.status}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

TubeLine.propTypes = {
    line: PropTypes.object.isRequired,
};

export default TubeLine;
