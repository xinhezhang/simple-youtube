import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            keyword: event.target.value,
        });
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    onChange={this.onInputChange}
                    value={this.state.keyword}
                />
                {this.state.keyword}
            </div>
        );
    }
}

export default SearchBar;