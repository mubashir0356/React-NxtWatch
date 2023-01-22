import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 5px;
    flex-direction: row;
  }
  margin-bottom: 15px;
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  width: 100%;
  @media screen and (max-width: 566px) {
    margin-top: 5px;
  }
`
export const ChannelLogo = styled.img`
  width: 45px;
  height: 45px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoTextContainer = styled.div`
  margin-left: 10px;
`
export const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  @media screen and (min-width: 567px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelDetailsText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
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
export const ListItem = styled.li`
  list-style-type: disc;
  padding:0px
  margin: 0px;
  @media screen and (min-width: 567px) {
    list-style-type: none;
  }
`
export const ChannelDetailsText1 = styled(ChannelDetailsText)`
  margin-left: 0px;
`
export const ListItem1 = styled.li`
  list-style-type: disc;
  padding:0px
  margin: 0px;
  @media screen and (min-width: 566px) {
    display:none;
  }
`
export const ListItem2 = styled.li`
  list-style-type: disc;
  padding:0px
  margin: 0px;
  margin-left:30px;
  @media screen and (max-width: 566px) {
    display:none;
  }
`
