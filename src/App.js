import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import Header from './components/header';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div>
                    <SearchBar />
                    <VideoDetail />
                    <VideoList />
                </div>
            </div>
        );
    }
}

export default App;
