import styled from 'styled-components'

export const NotFoundRouteContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    padding:0px;
    margin:0px
    min-height:100vh;
`

export const MainContainer = styled.div`
  display: flex;
  margin-top: 10vh;
  min-height: 90vh;
  width: 100vw;
`
export const SidePanelContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20vw;
    margin-top: 2vh;
  }
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const NotFoundImage = styled.img`
  width: 60%;
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const NotFoundText = styled.h1`
  margin: 0px;
  padding: 15px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
