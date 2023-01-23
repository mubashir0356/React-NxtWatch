import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  min-height: 10vh;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderLogoImg = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 0px;
  min-width: 30%;
`

export const MobileIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const MenuOptionsPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`

export const MenuOptionsListContainer = styled.div`
  flex-grow: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutPopupContainer = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f4f4f4'};
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const LogoutContentDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`
export const LogoutBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;
  @media screen and (max-width: 566px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px;
  }
`

export const LogoutBtn = styled.button`
  cursor: pointer;
  border: 1px solid #3b82f6;
  outline: none;
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 45%;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (max-width: 566px) {
    width: 100%;
    margin: 10px;
  }
`

export const NavDesktopContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const DesktopNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 0px;
  min-width: 20%;
`

export const ProfileIcon = styled.img`
  width: 25px;
  margin: 0px;
`

export const DesktopLogoutButton = styled(LogoutBtn)`
  margin: 0px;
  width: 35%;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
`
