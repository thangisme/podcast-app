import { ProgressBar } from './ProgressBar';
import { PodcastTitle } from './PodcastTitle';
import ImgTranslucent from 'components/ImgTranslucent';
import { MdPlayArrow, MdPause, MdForward30, MdReplay10 } from 'react-icons/md';
import { useMediaControls } from 'lib/hooks';
import { usePlayer } from 'lib/contexts';

const FullPlayer = () => {
  const {
    loading,
    currentIndex,
    playlist,
    isPlaying,
    current,
    audioRef,
  } = usePlayer();
  const audio = audioRef.current;

  const { toggleAudio } = useMediaControls();

  return (
    <div className="container">
      <div className="img-container">
        <ImgTranslucent
          url={current.urls.image || current.channel.urls.logo_image.original}
          alt={current.title}
          fullBlur
          borderRadius="10%"
        />
      </div>

      <div className="info">
        <PodcastTitle title={current.title} />
        <p>{current.channel.title}</p>
      </div>

      <div className="main-player">
        <button
          className="controller-button"
          onClick={() => {
            audio.currentTime = audio.currentTime - 10;
          }}
          aria-label="Seek backward 10 seconds"
        >
          <MdReplay10 color="white" size="2.5em" aria-hidden="true" />
        </button>

        <button
          className="play-button"
          disabled={loading}
          onClick={() => toggleAudio()}
          aria-label="Play or Pause Song"
        >
          {isPlaying ? (
            <MdPause color="white" size="3em" aria-label="Previous Song" />
          ) : (
            <MdPlayArrow
              color="white"
              size="3em"
              aria-label="Toogle audio play"
            />
          )}
        </button>

        <button
          disabled={currentIndex === playlist.length - 1}
          className="controller-button"
          onClick={() => {
            audio.currentTime = audio.currentTime + 30;
          }}
          aria-label="Seek forward 30 seconds"
        >
          <MdForward30 color="white" size="2.5em" aria-hidden="true" />
        </button>
      </div>

      <ProgressBar />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20vh 2rem 10vh;
          bottom: 1.5rem;
          height: 100%;
          color: white;
          position: relative;
        }
        @media screen and (max-height: 665px) {
          .container {
            padding: 15vh 2rem 10vh;
          }
        }
        .nav-button {
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          position: absolute;
          left: 1rem;
          top: 1.5rem;
          z-index: 11;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
        }
        .nav-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .img-container {
          width: 75%;
          max-width: 250px;
          margin: 0 auto;
          position: relative;
        }
        .info {
          width: 90%;
          max-width: 20rem;
          margin: 1em auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
        p {
          margin: 6px 0;
          font-size: 12px;
          font-weight: 400;
          color: #a8a8a8;
          text-transform: uppercase;
        }
        button {
          outline: none;
        }
        button[disabled] {
          opacity: 0.3;
        }

        .main-player {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 3% 0 8%;
        }
        .controller-button {
          background: none;
          border: none;
          display: flex;
          align-content: center;
          justify-content: center;
          transition: 0.2s;
          border-radius: 50%;
          padding: 0.2rem;
        }
        .play-button {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid white;
          background: none;
          transition: 0.2s;
        }
        .play-button:focus {
          outline: none;
        }
        .play-button:hover,
        .controller-button:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        @media screen and (min-width: 766px) and (max-width: 1023px) and (orientation: portrait) {
          .container {
            padding: 3rem 8rem 2rem;
            max-height: 40rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FullPlayer;
