import React, { Component } from 'react';
import { Polyline, Marker } from 'react-google-maps';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import ntol from 'number-to-letter';
import _ from 'lodash';

const DirectionMarker = ({ data, isEnd, i, onClick }) => {
    const { start_location, end_location } = data;
    if (isEnd) {
        return [
            <Marker onClick={onClick} position={start_location} label={ntol(i)} key="end0" />,
            <Marker onClick={onClick} position={end_location} label={ntol(i + 1)} key="end1" />
        ];
    }
    return <Marker onClick={onClick} position={start_location} label={ntol(i)} />;
};      

const Direction = ({ direction, isEnd, i, onClick, isSelected }) => {
    const data = direction.routes[0].legs[0];
    const path = data.steps.reduce((sum, current) => _.concat(sum, current.path), []);
    return [
        <DirectionMarker data={data} onClick={onClick} isEnd={isEnd} i={i} key="marker" />,
        <Polyline
        onClick={onClick}
        path={path}
        options={{
            strokeColor: isSelected ? purple : red,
            strokeOpacity: 0.6,
            strokeWeight: 6
        }}
        key="line"
        />
    ];
};

class Directions extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedSegment: 0 };
    }

    render() {
        const { directions } = this.props;
        if (_.isEmpty(directions)) {
            return false;
        }
        return directions.map((d, i) => {
            const directionProps = {
                direction: d,
                i,
                key: i,
                onClick: () => this.setState({ selectedSegment: i }),
                isEnd: i === directions.length - 1,
                isSelected: i === this.state.selectedSegment
            };
            return <Direction {...directionProps} />;
        });
    }
}

export default Directions;