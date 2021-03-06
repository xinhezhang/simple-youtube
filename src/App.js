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
                term: keyword,  // MUST use "term" for this API
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
        const onSearchChange = _.debounce((term) => { this.onSearchChange(term) }, 500);

        return (
            <div className="App">
                <Header />
                <div>
                    <SearchBar onSearchChange={onSearchChange}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        videos={this.state.videos}
                        onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    />
                </div>
            </div>
        );
    }
}

export default App;
