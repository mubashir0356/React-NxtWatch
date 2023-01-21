import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
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
  width: 50px;
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
  font-size: 14px;
`
