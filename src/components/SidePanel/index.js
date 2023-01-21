import MenuItemsList from '../MenuOptionsList'

import ThemeContext from '../../Context/ThemeContext'

import {
  PanelContainer,
  ContactUsContainer,
  ContactUsHeading,
  IconsContainer,
  ContactUsIcon,
  ContactUsDescription,
} from './styledComponents'

const SidePanel = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const theme = isDarkMode ? 'dark' : 'light'

      return (
        <PanelContainer theme={theme}>
          <MenuItemsList />
          <ContactUsContainer>
            <ContactUsHeading theme={theme}>CONTACT US</ContactUsHeading>
            <IconsContainer>
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <ContactUsDescription theme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </PanelContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SidePanel
