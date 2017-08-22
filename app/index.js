import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap';
import Progress from 'react-progress-2';
import FilterableTable from './components/FilterableTable';


require("style-loader!css-loader!../node_modules/react-progress-2/main.css")
/*-----------------*/

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Progress.Component thumbStyle={{ background: 'orange' }} />
                <FilterableTable />
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('Test'));