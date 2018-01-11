import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({
            keyword: event.target.value,
        });
    }
    onButtonClick(event) {
        //console.log(this.state.keyword);
        this.props.onSearchChange(event.target.value);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    onChange={event => this.onInputChange(event)}
                    value={this.state.keyword}
                />
                <button onClick={this.onButtonClick}>Search</button>
            </div>
        );
    }
}

export default SearchBar;