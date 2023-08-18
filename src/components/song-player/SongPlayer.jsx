import React, { useState } from "react";
import "./SongPlayer.css";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="song-player">
      <div className="song-player-name">
        <img
          src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="songimage"
        />

        <div className="song-des">
          <p className="song-name">Song name</p>
          <p className="album-name">Album name</p>
        </div>
      </div>

      <div className="video-player">
        {!isPlaying ? (
          <BsFillPlayCircleFill
            onClick={() => setIsPlaying(!isPlaying)}
            className="song-icon play"
          />
        ) : (
          <BsFillPauseCircleFill
            onClick={() => setIsPlaying(false)}
            className="song-icon play"
          />
        )}
        <div className="playing-time">
          <span className="start-time">0:38</span>
          <input type="range" />
          <span className="end-time">5:23</span>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
