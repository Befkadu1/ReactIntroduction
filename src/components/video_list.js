import React from 'react';
import VideoListItem from './video_list_item'

//Function component bc no need to have a state here
const VideoList = (props) =>{

    const VideoItems = props.videos.map( (video) => {
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key = {video.etag}
                video = {video}/> // key is like id
        )
    });
    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
}

export default VideoList;