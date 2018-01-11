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
    onInputChange(keyword) {
        console.log(keyword);
        this.setState({
            keyword,
        });
        this.props.onSearchChange(keyword);
    }
    onButtonClick() {
        console.log('click');
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    onChange={(event) => this.onInputChange(event.target.value)}
                    value={this.state.keyword}
                />
                <button onClick={this.onButtonClick}>Search</button>
            </div>
        );
    }
}

export default SearchBar;