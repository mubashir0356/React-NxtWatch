import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SidePanel from '../SidePanel'
import SavedVideoCard from '../SavedVideoCard'

import SavedVideosContext from '../../Context/SavedVideosContext'
import ThemeContext from '../../Context/ThemeContext'

import {
  SavedVideosMainContainer,
  MainContainer,
  SidePanelContainer,
  SavedVideosContainer,
  SavedVideosHeadingContainer,
  IconContainer,
  MenuHeading,
  NoVideosContainer,
  NoVideosImg,
  FailureHeading,
  FailureDescription,
  SavedVideosList,
} from './styledComponents'

const SavedVideos = () => {
  const renderSavedVideoList = themeValue => {
    const {isDarkMode} = themeValue
    const theme = isDarkMode ? 'dark' : 'light'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value

          if (savedVideosList.length === 0) {
            return (
              <NoVideosContainer theme={theme}>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />
                <FailureHeading theme={theme}>
                  No saved videos found
                </FailureHeading>
                <FailureDescription theme={theme}>
                  Save your videos by clicking a button
                </FailureDescription>
                <FailureDescription theme={theme}>
                  You can save your videos while watching them
                </FailureDescription>
              </NoVideosContainer>
            )
          }

          return (
            <SavedVideosList>
              {savedVideosList.map(each => (
                <SavedVideoCard key={each.id} videoDetails={each} />
              ))}
            </SavedVideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const theme = isDarkMode ? 'dark' : 'light'

        return (
          <SavedVideosMainContainer data-testid="savedVideos" theme={theme}>
            <Header />
            <MainContainer>
              <SidePanelContainer>
                <SidePanel />
              </SidePanelContainer>
              <SavedVideosContainer theme={theme}>
                <SavedVideosHeadingContainer theme={theme}>
                  <IconContainer theme={theme}>
                    <HiFire size={40} color="#ff0b37" />
                  </IconContainer>
                  <MenuHeading theme={theme}>Saved Videos</MenuHeading>
                </SavedVideosHeadingContainer>
                {renderSavedVideoList(value)}
              </SavedVideosContainer>
            </MainContainer>
          </SavedVideosMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
