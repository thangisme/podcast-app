import { usePlayer } from 'contexts'
import {MdPause, MdPlayArrow} from 'react-icons/md'
import TranslucentImage from '../TranslucentImage';
import MiniPlayerSkeleton from './MiniPlayerSkeleton';
import { colors, fontWeight } from 'styles/theme';
import CircleProgressBar from '../CircleProgressBar';

export default function MiniPlayer({currentPodcast, handleModalClick, toggleAudio, audioRef, duration, currentTime}) {
  const { loading } = usePlayer()
  
  if (loading) return <MiniPlayerSkeleton />

  return (
    <>
      <div className='container'>
        <button className='nav-button' onClick={() => handleModalClick()} />

        <div className="info-container" onClick={() => handleModalClick()} >
          <div className='img-container'>
            <TranslucentImage
              clipUrls={currentPodcast.urls}
              channelUrls={currentPodcast.channel.urls}
            />
          </div>

          <div className='info'>
            <h3>{currentPodcast.title}</h3>
            <h4>{currentPodcast.channel.title}</h4>
          </div>
        </div>
        
        <button
            className='play-button'
            onClick={() => toggleAudio()} 
          >
            <CircleProgressBar percentage={duration ? (currentTime * 100) / duration : 0} />
            {audioRef.current.paused ? ( 
              <MdPlayArrow color='white' size='2em' />
              ) : (
              <MdPause color='white' size='2em' />
            )}

          </button>
      </div>
      
      <style jsx>{`
        button {
          background: ${colors.black};
        }
        h3 {
          color: ${colors.white};
        }
        h4 {
          color: ${colors.gray};
          font-weight: ${fontWeight.regular};
        }
      `}</style>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-button {
          outline: none;
          border: none;
          height: 3px;
          width: 30px;
          border-radius: 5px;
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
        }
        .info-container {
          display: flex;
          align-items: center;
        }
        .img-container {
          width: 3.5em;
        }
        .info {
          position: relative;
          left: 1rem;
          max-width: 10em;
        }
        .info h3,
        .info h4 {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h3 {
          font-size: .9rem;
          margin: 0 0 4px;
        }
        h4 {
          font-size: 0.7rem;
          margin: 0;
          text-transform: uppercase;
        }
        .play-button {
          border: none;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}