import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import audioExampleSvg from "../../../assets/icons/audio-example.svg";
import audioPlaySvg from "../../../assets/icons/audio-play.svg";
import audioPauseSvg from "../../../assets/icons/audio-pause.svg";

import { convertCurrentTime } from "../../../helpers";

const MessageAudio = ({ audio }) => {
  const [isPlaying, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const audioElem = React.useRef(null);
  const timeline = React.useRef(null);

  React.useEffect(() => {
    audioElem.current &&
      audioElem.current.addEventListener(
        "playing",
        () => {
          setPlaying(true);
        },
        false
      );
    audioElem.current &&
      audioElem.current.addEventListener(
        "ended",
        () => {
          setPlaying(false);
        },
        false
      );
    audioElem.current &&
      audioElem.current.addEventListener("timeupdate", () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(convertCurrentTime(audioElem.current.currentTime));
        setProgress(
          (audioElem.current.currentTime / duration) * 100 + duration * 0.5
        );
      });
    audioElem.current &&
      audioElem.current.addEventListener("loadedmetadata", () => {
        setCurrentTime(convertCurrentTime(audioElem.current.duration));
      });
  }, []);

  const togglePlayAudio = () => {
    setPlaying(!isPlaying);
    audioElem.current.volume = "0.1";
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };
  const handleTimelineClick = (event) => {
    // console.log(event);
  };

  return (
    <div className={"message__audio"}>
      <audio ref={audioElem} src={audio} preload={"auto"} />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
        ref={timeline}
      />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlayAudio}>
            <img
              src={isPlaying ? audioPauseSvg : audioPlaySvg}
              alt="pause/play svg"
            />
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={audioExampleSvg} alt="wave svg" />
        </div>
        <span className="message__audio-duration">{currentTime}</span>
      </div>
    </div>
  );
};
MessageAudio.propTypes = {
  audio: PropTypes.string,
};

export default MessageAudio;
