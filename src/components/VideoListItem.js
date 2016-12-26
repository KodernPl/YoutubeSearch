import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <div>
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                     </div>

                     <div>
                     <div className="media-heading">{video.snippet.title}</div>
                     </div>
                </div>
            </li>
        </div>
    )
}

export default VideoListItem