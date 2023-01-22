import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
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
export const SavedVideosContainer = styled.div`
  height: 90vh;
  flex-grow: 1;
  width: 80vw;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  width: 100%;
  padding: 10px;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    margin-top: 25px;
  }
  background-color: ${props =>
    props.theme === 'dark' ? '#424242' : '#e2e8f0'};
`

export const IconContainer = styled.div`
  border-radius: 40px;
  height: 70px;
  width: 70px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f8fafc'};
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 15px;
`
export const MenuHeading = styled.h1`
  font-weight: bolder;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f8fafc'};
`

export const NoVideosImg = styled.img`
  width: 60%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const FailureHeading = styled.h1`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const FailureDescription = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SavedVideosList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`
