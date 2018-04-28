import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TubeLinesList from './TubeLinesList';
import * as actions from '../../actions/tube-lines';

const mapStateToProps = state => ({
    lines: state.lines,
});

const mapDispatchToPros = dispatch => ({
    linesAction: bindActionCreators(actions, dispatch),
});

class TubeTrackerPage extends React.Component {
    componentWillMount() {
        this.props.linesAction.fetchLines();
    }

    render() {
        return (
            <div>
                {/* <h1>Tube Lines Status</h1> */}
                <TubeLinesList lines={this.props.lines} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(TubeTrackerPage);
