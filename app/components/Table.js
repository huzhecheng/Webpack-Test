import React from 'react';
import Row from './Row';

class Table extends React.Component {
    render() {
        var rows = [];

        this.props.datas.forEach((data) => {
            if (data.Currency.indexOf(this.props.filterText))
                return;
            rows.push(<Row data={data} key={data.Currency} />)
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>幣別</th>
                        <th>銀行現金買入</th>
                        <th>銀行即期買入</th>
                        <th>銀行現金賣出</th>
                        <th>銀行即期賣出</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default Table;