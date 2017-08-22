import React from 'react';
import SearchInput from './SearchInput';
import Table from './Table';
import Progress from 'react-progress-2';


const formatCurrency = (v) => {
    const Country = {
        'USD': '美元', 'HKD': '港幣', 'GBP': '英鎊',
        'AUD': '澳幣', 'CAD': '加拿大幣', 'SGD': '新加坡幣',
        'CHF': '瑞士法郎', 'JPY': '日圓', 'ZAR': '南非幣',
        'SEK': '瑞典克朗', 'NZD': '紐西蘭幣', 'THB': '泰銖',
        'PHP': '菲律賓披索', 'IDR': '印尼盾', 'EUR': '歐元',
        'KRW': '韓元', 'VND': '越南幣', 'MYR': '馬來西亞幣',
        'CNY': '人民幣'
    };

    return Country[v];
}

class FilterableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            datas: [],
            loading: true
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    componentDidMount() {
        Progress.show();
        setTimeout(() => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D%27http%3A%2F%2Frate.bot.com.tw%2Fxrt%2Fflcsv%2F0%2Fday%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
            xhr.onload = () => {
                var res = JSON.parse(xhr.response);
                var rows = res.query.results.row;
                var currencyArray = [];

                for (var i = 1; i < rows.length; i++) {
                    var obj = {
                        'Currency': formatCurrency(rows[i].col0),
                        'BuyCash': rows[i].col2,
                        'BuySight': rows[i].col3,
                        'SellCash': rows[i].col12,
                        'SellSight': rows[i].col13
                    }
                    currencyArray.push(obj)
                }
                Progress.hide();
                this.setState({ datas: currencyArray, loading: false });
               
            }
            xhr.send();
        }, 5000);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    render() {
        const { loading } = this.state;

        return (
            loading ?
                null :
                <div>
                    <SearchInput
                        filterText={this.state.filterText}
                        onFilterTextInput={this.handleFilterTextInput} />
                    <Table
                        filterText={this.state.filterText}
                        datas={this.state.datas} />
                </div>
        );
    }
}

export default FilterableTable;