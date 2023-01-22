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
  ViewsContainer,
  ChannelDetailsText,
  ListItem,
  ChannelDetailsText1,
  ListItem1,
  ListItem2,
} from './styledComponents'

import './index.css'

const SavedVideoCard = props => {
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

  //   let postedAt = formatDistanceToNow(new Date(publishedAt))
  //   const postedAtList = postedAt.split(' ')

  //   if (postedAtList.length === 3) {
  //     postedAtList.shift()
  //     postedAt = postedAtList.join(' ')
  //   }

  const card = value => {
    const {isDarkMode} = value
    const theme = isDarkMode ? 'dark' : 'light'

    return (
      <ActiveRouteContext.Consumer>
        {activeValue => {
          const {changeActiveMenu} = activeValue

          return (
            <Link
              to={`/videos/${id}`}
              className="link"
              onClick={() => changeActiveMenu('INITIAL')}
            >
              <VideoCardContainer>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoTextContainer>
                    <VideoTitle theme={theme}>{title}</VideoTitle>
                    <ViewsContainer>
                      <ChannelDetailsText>{name}</ChannelDetailsText>
                      <ul className="published-at-bulletin-1">
                        <ListItem>
                          <ChannelDetailsText1>{`${viewCount} views`}</ChannelDetailsText1>
                        </ListItem>
                        <ListItem2>
                          <ChannelDetailsText1>
                            {publishedAt}
                          </ChannelDetailsText1>
                        </ListItem2>
                      </ul>
                      <ul className="published-at-bulletin-1">
                        <ListItem1>
                          <ChannelDetailsText1>
                            {publishedAt}
                          </ChannelDetailsText1>
                        </ListItem1>
                      </ul>
                    </ViewsContainer>
                  </VideoTextContainer>
                </VideoDetailsContainer>
              </VideoCardContainer>
            </Link>
          )
        }}
      </ActiveRouteContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default SavedVideoCard
