/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '@vidstack/react/player/styles/base.css';
import { Media, Video } from '@vidstack/player-react';
// import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import styles from './css/VideoPlayer.module.scss';

const VideoPlayer = () => {
  return (
    <Media className={styles.videoContainer}>
      <Video
        loading="visible"
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
        controls
        preload="true"
        className={styles.videoDiv}
      >
        <video
          loading="visible"
          poster="https://files.vidstack.io/sprite-fight/poster.webp"
          src="https://files.vidstack.io/sprite-fight/720p.mp4"
          preload="none"
          data-video="0"
          className={styles.video}
          controls
        />
      </Video>
      <div className={styles.videoTime}>
        <p className={styles.currentTime}>00:00</p>
        |
        <p className={styles.duration}>05:00</p>
      </div>
      <article className={styles.videoSubtitle}>
        <h2 className={styles.subtitle}>Subtitle</h2>
        <p className={styles.videoSubtitleText}>
          Subtitle texobt uhieheifiehiofiefieigoes here8ode duiyeg8deihdoe ejdeuigedged ejedivdev
          eigdiegieodjeode chheohof coeioenr fmrjfof iedjihjjkljcbkr ioebffjlkf
        </p>
      </article>
    </Media>
  );
};

export default VideoPlayer;
