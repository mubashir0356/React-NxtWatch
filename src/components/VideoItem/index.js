import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'
import ActiveRouteContext from '../../Context/ActiveRouteContext'

import {
  VideoCardContainer,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTextContainer,
  VideoTitle,
} from './styledComponents'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails

  const {name, profileImageUrl} = channel

  const card = value => {
    const {isDarkMode} = value
    const theme = isDarkMode ? 'dark' : 'light'

    return (
      <ActiveRouteContext.Consumer>
        {activeRouteValue => {
          const {changeActiveMenu} = activeRouteValue
          return (
            <VideoCardContainer as="li">
              <Link
                to={`/videos/${id}`}
                className="link"
                onClick={() => changeActiveMenu('INITIAL')}
              >
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                  </VideoTextContainer>
                </VideoDetailsContainer>
              </Link>
            </VideoCardContainer>
          )
        }}
      </ActiveRouteContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default VideoItem
