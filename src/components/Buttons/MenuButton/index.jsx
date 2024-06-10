import PropTypes from 'prop-types';
import './styles.scss'

const MenuButton = ({title, imageSrc}) => {
  return(
    <div className='menu-button'>
      <img className="button-img" src={imageSrc}/>
      <p className='p-small'>{title}</p>
    </div>
  )

}

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default MenuButton