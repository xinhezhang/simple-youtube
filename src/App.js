import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import Header from './components/header';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBtkp7E_9DsUvB9Auth2x8HVZYNCr8ilRc';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.onSearchChange('');
    }
    onSearchChange(keyword) {
        YTSearch(
            {
                key: API_KEY,
                keyword: keyword,
            },
            (videos) => {
                //console.log(videos);
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0],
                });
            }
        );
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div>
                    <SearchBar onSearchChange={this.onSearchChange('')}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

export default App;
