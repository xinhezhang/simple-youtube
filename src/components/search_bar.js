import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(keyword) {
        //console.log(keyword);
        this.setState({
            keyword,
        });
        this.props.onSearchChange(keyword);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    onChange={(event) => this.onInputChange(event.target.value)}
                    value={this.state.keyword}
                />
            </div>
        );
    }
}

export default SearchBar;