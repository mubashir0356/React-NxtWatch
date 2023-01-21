import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 5px;
    height: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 5px;
    height: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
`

export const ChannelLogo = styled.img`
  width: 45px;
  height: 45px;
`

export const VideoTextContainer = styled.div`
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  margin: 0px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  font-weight: normal;
  font-family: 'Roboto';
  font-size: 16px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ListItem = styled.li`
  list-style-type: disc;
  padding:0px
  margin: 0px;
`
export const ChannelDetailsText1 = styled(ChannelDetailsText)`
  margin-left: 0px;
`
