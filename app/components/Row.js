import React from 'react';

class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.Currency}</td>
                <td>{this.props.data.BuyCash}</td>
                <td>{this.props.data.BuySight}</td>
                <td>{this.props.data.SellCash}</td>
                <td>{this.props.data.SellSight}</td>
            </tr>
        );
    }
}

export default Row;