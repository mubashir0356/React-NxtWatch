import Header from '../Header'
import SidePanel from '../SidePanel'

import ThemeContext from '../../Context/ThemeContext'

import {
  NotFoundRouteContainer,
  MainContainer,
  SidePanelContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const theme = isDarkMode ? 'dark' : 'light'

      const imgUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundRouteContainer theme={theme}>
          <Header />
          <MainContainer>
            <SidePanelContainer>
              <SidePanel />
            </SidePanelContainer>
            <NotFoundContainer theme={theme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundText as="p" theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </MainContainer>
        </NotFoundRouteContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
