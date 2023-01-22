import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SidePanel from '../SidePanel'
import SavedVideoCard from '../SavedVideoCard'

import ThemeContext from '../../Context/ThemeContext'

import {
  TrendingMainContainer,
  MainContainer,
  SidePanelContainer,
  TrendingVideosContainer,
  TrendingVideosHeadingContainer,
  IconContainer,
  MenuHeading,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  TrendingVideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state

    return (
      <TrendingVideosList>
        {videosList.map(eachVideo => (
          <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosList>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const theme = isDarkMode ? 'dark' : 'light'

        const imgUrl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={imgUrl} alt="failure view" />
            <FailureHeading theme={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again
            </FailureDescription>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoaderView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderApiStatusContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const theme = isDarkMode ? 'dark' : 'light'

          return (
            <TrendingMainContainer data-testid="trending" theme={theme}>
              <Header />
              <MainContainer>
                <SidePanelContainer>
                  <SidePanel />
                </SidePanelContainer>
                <TrendingVideosContainer theme={theme}>
                  <TrendingVideosHeadingContainer theme={theme}>
                    <IconContainer theme={theme}>
                      <HiFire size={40} color="#ff0b37" />
                    </IconContainer>
                    <MenuHeading theme={theme}>Trending</MenuHeading>
                  </TrendingVideosHeadingContainer>
                  {this.renderApiStatusContent()}
                </TrendingVideosContainer>
              </MainContainer>
            </TrendingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
