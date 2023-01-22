import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`

export const HomeRouteContainer = styled.div`
  display: flex;
  margin-top: 12vh;
  min-height: 90vh;
  justify-content: space-between;
  width: 100vw;
  overflow-x: hidden;
`

export const SidePanelContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20vw;
    margin-top: 0px;
  }
`
export const HomeContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 20px;
  width: 80vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const PremiumPopUpBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`
export const BannerLogo = styled.img`
  width: 140px;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`

export const BannerButton = styled.button`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  width: 150px;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  padding: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  margin-top: 15px;
  padding: 8px 0px 8px 0px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  height: 30px;
  flex-grow: 1;
  border: 1px solid
    ${props => (props.theme === 'dark' ? ' #212121' : '#d7dfe9')};
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#616e7c')};
  padding-left: 10px;
  background-color: transparent;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? ' #212121' : '#d7dfe9'};
  height: 30px;
  width: 70px;
  padding-top: 4px;
  border: 1px solid
    ${props => (props.theme === 'dark' ? ' #212121' : '#d7dfe9')};
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 10px;
`
export const FailureImg = styled.img`
  width: 80%;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FailureHeading = styled.h1`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const FailureDescription = styled.p`
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 8px;
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`

export const NoVideosContainer = styled(FailureContainer)``

export const NoVideosImg = styled(FailureImg)``

export const VideosListContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
