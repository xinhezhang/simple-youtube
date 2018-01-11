import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
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
