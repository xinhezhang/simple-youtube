import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    render() {
        const videoListItem = this.props.videos.map((video) => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                />
            );
        });

        return (
            <ul className="col-md-4 list-group">
                {videoListItem}
            </ul>
        );
    }
}

export default VideoList;