import PropTypes from 'prop-types';
import icons from '../../assets/icons'
import MenuButton from '../Buttons/MenuButton'
import './styles.scss'

const NavBar = ({isMenuOpen,onMenuOpen}) => {
  const options = ['Gifting', 'Travel','Adults Welcome', 'Art and Home Decor', 'Space', 'Pop Culture', 'Toddlers', 'Real World Role Playing']
  const buttons = [
    {title: 'Contact us', imageSrc: icons.messageCircle},
    {title: 'Request', imageSrc: icons.shoppingBag},
    {title: 'Search', imageSrc: icons.search}
  ]

  return (
    <nav className={`${isMenuOpen ? 'menu-opened' : 'menu-closed'}`}>
      <div className='logo'>
        <a href='#'>
          <img src='src/assets/logos/brand-logo.svg' alt="Brand's Logo" />
        </a>
      </div>
      <div className='category' onClick={() => onMenuOpen(true)}>
        <div className='category-button' />
        <p className='p-small'>Categories</p>
      </div>
      <div className='anchors'>
        {
          options.map(option => {
            return <a key={option} href={`#${option}`} className='p-small anchor'>{option}</a>
          })
        }
      </div>
      <div className='menu-buttons'>
        {
          buttons.map(button => {
            return <MenuButton key={button.title} title={button.title} imageSrc={button.imageSrc}/>
          })
        }
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuOpen: PropTypes.func.isRequired
}

export default NavBar;