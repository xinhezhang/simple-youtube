import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    render() {
        return (
            <ul>
                <VideoListItem />
                <VideoListItem />
                <VideoListItem />
            </ul>
        );
    }
}

export default VideoList;