import PropTypes from 'prop-types';
import './styles.scss'

const IconButton = ({ size = 64, imageSrc, isBackButton, isCloseButton}) => {
  return (
    <div className={`round-btn${isBackButton ? ' back' : ''}${isCloseButton ? ' close' : ''}`} style={{ width: size, height: size }}>
      <img src={imageSrc} style={{ width: size / 2.5, height: size / 2.5 }}></img>
    </div>
  )
}

IconButton.propTypes = {
  size: PropTypes.number,
  imageSrc: PropTypes.string.isRequired,
  isBackButton: PropTypes.bool,
  isCloseButton: PropTypes.bool
}

export default IconButton;