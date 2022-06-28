import React from 'react';
import ReactPlayer from '../react-player/youtube'
function VideoPlayer(props: { url: string, settings:any }) {
    return (
        <>
        <ReactPlayer url={props.url} playing={props.settings.autoPlay} playbackRate={props.settings.playbackRate} volume={props.settings.volume} style={{
                position: 'relative', marginLeft: 'auto',
                marginRight: 'auto', marginBottom: '25px'
        }} />
      </>
  );
}

export default VideoPlayer;
