import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="快速查詢..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange} />
            </form>
        );
    }
}

export  default SearchBar;