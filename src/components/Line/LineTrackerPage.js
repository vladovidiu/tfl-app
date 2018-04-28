import React from 'react';
import axios from 'axios';

const API_ROOT = 'https://api.tfl.gov.uk/line';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: [],
        };
    }

    componentDidMount() {
        const {
            match: { params },
        } = this.props;
        axios.get(`${API_ROOT}/${params.id}/route/sequence/outbound`).then(response => {
            console.log(response.data);
        });
    }

    render() {
        return <div>Hello</div>;
    }
}

export default Test;
