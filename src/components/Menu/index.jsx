import PropTypes from 'prop-types'
import IconButton from '../Buttons/IconButton'
import icons from '../../assets/icons'
import './styles.scss'
import Card from '../Card'

const Menu = ({isMenuOpen, onMenuClose}) => {
  const options = ['Gifting', 'Travel','Adults Welcome', 'Art and Home Decor', 'Space', 'Pop Culture', 'Toddlers', 'Real World Role Playing']
  const cards = ['brand1','brand2','brand3','brand4','brand5','brand6','brand7','brand8','brand9']
  const buttons = [
    {title: 'Home', imageSrc: icons.home},
    {title: 'Requests', imageSrc: icons.shoppingBag},
    {title: 'Contact us', imageSrc: icons.messageCircle}
  ]

  return (
    <div className={`menu ${isMenuOpen? 'open' : 'closed'}`}>
      <div className='left-menu'>
        <div className='header'>
          <img className='header-menu-img' src='/src/assets/logos/brand-logo.svg' />
          <div onClick={() => onMenuClose(false)}>
            <IconButton isCloseButton imageSrc={icons.x}/>
          </div>
        </div>
        <div className='links'>
          <div className='pop-menu-buttons'>
            {
              buttons.map(button => {
                return (
                  <div key={button.title} className='pop-menu-button'>
                    <img src={button.imageSrc} />
                    <a
                      href='#'
                      onClick={() => {
                        onMenuClose(false)
                      }}
                    >
                      <h4>{button.title}</h4>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='themes'>
          <div className='heading'>
            <hr className='line'/>
            <p className='p-large'>Themes</p>
          </div>
          <div className='pop-menu-buttons'>
            {
              options.map(option => {
                return (
                  <a
                    className='p-large-regular pop-menu-button'
                    key={option}
                    href={`/#${option}`}
                    onClick={() => {
                      onMenuClose(false)
                    }}
                  >
                    {option}
                  </a>)
              })
            }
          </div>
        </div>
      </div>
      <div className='right-menu'>
        {
          cards.map(card => {
            return <Card key={card} imageSrc={card}/>
          })
        }
      </div>
    </div>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuClose: PropTypes.func.isRequired
}

export default Menu;