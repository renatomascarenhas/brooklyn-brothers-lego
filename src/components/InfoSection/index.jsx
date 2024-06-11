import PropTypes from 'prop-types';
import CustomButtom from '../Buttons/CustomButton'
import icons from '../../assets/icons'
import './styles.scss'

const InfoSection = ({title, subtitle, color, topInfo, bottomInfo}) => {
  return (
    <section id={title} className='info-section'>
      <div className='anchor-space' />
      <div className='heading'>
        <h4>{title}</h4>
        <p className={`${color}`}>{subtitle}</p>
      </div>
      <div className={`section-wrapper ${color}`}>
        {
          topInfo &&
          <div className='inner-section right-section'>
            <div className='text'>
              <h3>{topInfo?.title}</h3>
              <p className='p-large'>{topInfo?.text}</p>
              <CustomButtom title='View Details' imageSrc={icons.arrowRight}/>
            </div>
            <img className='info-img' src={`src/assets/images/${topInfo?.imgName}.png`} alt={`${title} image`} />
          </div>
        }
        {
          bottomInfo &&
          <div className='inner-section left-section'>
            <div className='text'>
              <h3>{bottomInfo?.title}</h3>
              <p className='p-large'>{bottomInfo?.text}</p>
              <CustomButtom title='View Details' imageSrc={icons.arrowRight}/>
            </div>
            <img className='info-img' src={`src/assets/images/${bottomInfo?.imgName}.png`} alt={`${title} image`} />
          </div>
        }
      </div>
    </section>
  )
}

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'green','yellow','blue','orange', 'grey', 'black', 'red-light']),
  topInfo: PropTypes.object,
  bottomInfo: PropTypes.object
}

export default InfoSection