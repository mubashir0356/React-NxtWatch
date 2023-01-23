import styled from 'styled-components'

export const MenuList = styled.ul`
  list-style: none;
  padding: 0px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    align-self: flex-start;
    width: 100%;
  }
`

export const MenuLink = styled.li`
  align-self: center;
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  padding-left: 40%;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    justify-content: stretch;
    align-self: stretch;
    width: 20vw;
  }
  @media screen and (max-width: 566px) {
    padding-left: 25%;
  }
`

export const MenuHeading = styled.p`
  font-weight: 500;
  padding-left: 15px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 16px;
`
