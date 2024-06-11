import IconButton from '../Buttons/IconButton'
import icons from '../../assets/icons'
import './styles.scss'

const VideoSection = () => {
  return (
    <section className='video-section'>
      <div className='video-area'>
        <div className='video-text'>
          <p className='p-large-regular'>{`video autoplay with no sound`}</p>
        </div>
        <div className='video-buttons mobile'>
          <IconButton size={80} imageSrc={icons.volumeX}/>
          <IconButton size={64} imageSrc={icons.film}/>
        </div>
      </div>
      <div className='video-info'>
        <div>
          <h1>Welcome to the Play Matters Interactive Lookbook</h1>
        </div>
        <div className='video-buttons desktop'>
          <IconButton size={80} imageSrc={icons.volumeX}/>
          <IconButton size={64} imageSrc={icons.film}/>
        </div>
      </div>
      <div className='video-footer'>
        <p className='p-large-regular'>Scroll Down</p>
        <img src={icons.chevronsDown} />
      </div>
    </section>
  )
}

export default VideoSection