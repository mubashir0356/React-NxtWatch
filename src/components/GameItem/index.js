import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'
import ActiveRouteContext from '../../Context/ActiveRouteContext'

import {
  GamingCardItem,
  Thumbnail,
  CardDetails,
  VideoTitle,
  ViewsContainer,
  VideoDetailsText,
} from './styledComponents'

const GameItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  const card = value => {
    const {isDarkMode} = value
    const theme = isDarkMode ? 'dark' : 'light'

    return (
      <ActiveRouteContext.Consumer>
        {activeValue => {
          const {changeActiveMenu} = activeValue

          return (
            <GamingCardItem>
              <Link
                to={`/videos/${id}`}
                className="link"
                onClick={() => changeActiveMenu('INITIAL')}
              >
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <CardDetails>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <ViewsContainer>
                    <VideoDetailsText>
                      {viewCount} Watching Worldwide
                    </VideoDetailsText>
                  </ViewsContainer>
                </CardDetails>
              </Link>
            </GamingCardItem>
          )
        }}
      </ActiveRouteContext.Consumer>
    )
  }

  return <ThemeContext.Consumer>{value => card(value)}</ThemeContext.Consumer>
}

export default GameItem
