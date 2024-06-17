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
    <section>
      <div className={styles.title}>
        <h1 className={styles.title}>Welcome to PalmSchool</h1>
        <p className={styles.subtitle}>Watch the introductory video below!</p>
      </div>
      <Media>
        <Video loading="visible" poster="https://files.vidstack.io/sprite-fight/poster.webp" controls preload="true">
          <video
            loading="visible"
            poster="https://files.vidstack.io/sprite-fight/poster.webp"
            src="https://files.vidstack.io/sprite-fight/720p.mp4"
            preload="none"
            data-video="0"
            controls
          />
        </Video>
      </Media>
    </section>
  );
};

export default VideoPlayer;
