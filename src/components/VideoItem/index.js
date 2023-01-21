import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../Context/ThemeContext'
import ActiveRouteContext from '../../Context/ActiveRouteContext'

import {
  VideoCardContainer,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTextContainer,
  VideoTitle,
  ChannelDetailsContainer,
  ChannelDetailsText,
  ViewsContainer,
  ListItem,
  ChannelDetailsText1,
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

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

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
                    <ChannelDetailsContainer>
                      <ChannelDetailsText>{name}</ChannelDetailsText>
                      <ViewsContainer>
                        <ChannelDetailsText>{`${viewCount} views`}</ChannelDetailsText>
                        <ul className="published-at-bulletin">
                          <ListItem>
                            <ChannelDetailsText1>{`${postedAt} ago`}</ChannelDetailsText1>
                          </ListItem>
                        </ul>
                      </ViewsContainer>
                    </ChannelDetailsContainer>
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
