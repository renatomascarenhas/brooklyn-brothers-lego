import PropTypes from 'prop-types'
import './styles.scss'

const Card = ({imageSrc}) => {
  return (
    <div className='card'>
      <img src={`/src/assets/logos/${imageSrc}.png`} alt="Brand logo" />
    </div>
  )
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired
}

export default Card;