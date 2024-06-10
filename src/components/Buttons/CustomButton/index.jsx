import PropTypes from 'prop-types';
import './styles.scss'

const CustomButton = ( {
  title,
  type = 'primary',
  align = 'right',
  imageSrc
}) => {
  return(
  <div className={`btn ${type} ${align}`}>
    <p>{title}</p>
    {
      imageSrc &&
      <img src={imageSrc} className='icon btn-img'/>
    }
  </div>)
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  align: PropTypes.oneOf(['left', 'right']),
  imageSrc: PropTypes.string
}

export default CustomButton;