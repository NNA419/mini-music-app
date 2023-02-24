import { IconButton, Typography } from '@mui/material';
import React from 'react';
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import useMusicPlayer from '../hooks/useMusicPlayer';
import HeadphonesIcon from "@mui/icons-material/Headphones";
function TrackList() {

    const { trackList , currentTrackName , playTrack , isPlaying , currentTrackIndex } = useMusicPlayer();
    console.log(trackList);

  return (
    <div>
      <div className="marquee-1">
        <div className="marquee-2">
          <marquee> {currentTrackName}</marquee>
        </div>
    </div>
          <div className='track-list-container'>
              {trackList.map((track , index ) => {
                  return (
                    <div key={index} className="track">
                      <div className="action-button">
                        <IconButton onClick={() => playTrack(index)}>
                            {isPlaying && index === currentTrackIndex? <HeadphonesIcon /> : <PauseCircleIcon/>}
                        </IconButton>
                        <Typography>{track.name}</Typography>
                      </div>
                    </div>
                  );
              })}
             
          </div> 
    </div>
  );
}

export default TrackList;