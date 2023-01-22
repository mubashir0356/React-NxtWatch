import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import ThemeContext from '../../Context/ThemeContext'
import ActiveRouteContext from '../../Context/ActiveRouteContext'

import MenuOptionsList from '../MenuOptionsList'

import {
  NavMobileContainer,
  HeaderLogoImg,
  MobileNavLinks,
  MobileIconButton,
  MenuOptionsPopup,
  CloseButton,
  MenuOptionsListContainer,
  LogoutPopupContainer,
  LogoutContentDescription,
  LogoutPopupContent,
  LogoutBtnContainer,
  LogoutBtn,
  NavDesktopContainer,
  DesktopNavLinks,
  ProfileIcon,
  DesktopLogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkMode, toggleTheme} = value
      const logoUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const theme = isDarkMode ? 'dark' : 'light'
      const color = isDarkMode ? 'white' : 'black'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <NavMobileContainer theme={theme}>
            <ActiveRouteContext.Consumer>
              {activeValue => {
                const {changeActiveMenu} = activeValue
                return (
                  <Link to="/">
                    <HeaderLogoImg
                      src={logoUrl}
                      alt="website logo"
                      onClick={() => changeActiveMenu('HOME')}
                    />
                  </Link>
                )
              }}
            </ActiveRouteContext.Consumer>

            <MobileNavLinks>
              <MobileIconButton
                type="button"
                data-testid="theme"
                onClick={() => toggleTheme()}
              >
                {isDarkMode ? (
                  <FiSun color="white" size={18} />
                ) : (
                  <FaMoon size={18} />
                )}
              </MobileIconButton>
              <Popup
                modal
                className="popup-content"
                trigger={
                  <MobileIconButton type="button">
                    <GiHamburgerMenu color={color} size={18} />
                  </MobileIconButton>
                }
              >
                {close => (
                  <MenuOptionsPopup theme={theme}>
                    <CloseButton>
                      <MobileIconButton type="button" onClick={() => close()}>
                        <IoMdClose size={20} color={color} />
                      </MobileIconButton>
                    </CloseButton>
                    <MenuOptionsListContainer>
                      <MenuOptionsList />
                    </MenuOptionsListContainer>
                  </MenuOptionsPopup>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <MobileIconButton type="button">
                    <FiLogOut color={color} size={18} />
                  </MobileIconButton>
                }
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupContainer>
                    <LogoutPopupContent theme={theme} color={color}>
                      <LogoutContentDescription theme={theme}>
                        Are you sure, you want to logout
                      </LogoutContentDescription>
                      <LogoutBtnContainer>
                        <LogoutBtn
                          type="button"
                          outline
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutBtn>
                        <LogoutBtn type="button" onClick={onClickLogout}>
                          Confirm
                        </LogoutBtn>
                      </LogoutBtnContainer>
                    </LogoutPopupContent>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </MobileNavLinks>
          </NavMobileContainer>
          <NavDesktopContainer theme={theme}>
            <ActiveRouteContext.Consumer>
              {activeValue => {
                const {changeActiveMenu} = activeValue
                return (
                  <Link to="/">
                    <HeaderLogoImg
                      src={logoUrl}
                      alt="website logo"
                      onClick={() => changeActiveMenu('HOME')}
                    />
                  </Link>
                )
              }}
            </ActiveRouteContext.Consumer>
            <DesktopNavLinks>
              <MobileIconButton type="button" onClick={() => toggleTheme()}>
                {isDarkMode ? (
                  <FiSun color="white" size={23} />
                ) : (
                  <FaMoon size={23} />
                )}
              </MobileIconButton>
              <ProfileIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <DesktopLogoutButton theme={theme} outline>
                    Logout
                  </DesktopLogoutButton>
                }
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupContainer>
                    <LogoutPopupContent theme={theme} color={color}>
                      <LogoutContentDescription theme={theme}>
                        Are you sure you want to logout?
                      </LogoutContentDescription>
                      <LogoutBtnContainer>
                        <LogoutBtn
                          type="button"
                          outline
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutBtn>
                        <LogoutBtn type="button" onClick={onClickLogout}>
                          Confirm
                        </LogoutBtn>
                      </LogoutBtnContainer>
                    </LogoutPopupContent>
                  </LogoutPopupContainer>
                )}
              </Popup>
            </DesktopNavLinks>
          </NavDesktopContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
