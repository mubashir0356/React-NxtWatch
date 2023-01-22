import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
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
export const VideoItemContainer = styled.div`
  height: 90vh;
  flex-grow: 1;
  padding: 20px;
  width: 80vw;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
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
`

export const VideoDetailContainer = styled.div`
  height: 100%;
`
export const VideoPlayerContainer = styled.div`
  height: 50%;
  @media screen and (min-width: 768px) {
    height: 70%;
    padding: 20px 20px 0px 20px;
  }
`
export const VideoTextContainer = styled.div`
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
export const VideoTitle = styled.p`
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`
export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoDetailsText = styled.p`
  margin: 0px;
  margin-right: 8px;

  color: #475569;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`

export const VideoDetailsText1 = styled(VideoDetailsText)`
  margin-left: 0px;
`

export const ListItem = styled.li`
  list-style-type: disc;
  padding:0px
  margin: 0px; 
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`

export const VideoItemButton = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0px;
  margin-right: 20px;
  margin-top: 0px;
  padding-bottom: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 12px;
`
export const LikeDislikeText = styled.p`
  margin: 0px;
  margin-top: 6px;
  margin-left: 3px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 12px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const ChannelDetailsText = styled.p`
  margin: 0px;
  padding-left: 15px;
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
  margin-top: 8px;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  margin-bottom: 20px;
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 12px;
  margin-left: 65px;
`
