import {Component} from 'react'

import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SidePanel from '../SidePanel'
import VideoItem from '../VideoItem'

import {
  HomeMainContainer,
  HomeRouteContainer,
  SidePanelContainer,
  HomeContainer,
  PremiumPopUpBanner,
  BannerCloseButton,
  BannerLogo,
  BannerText,
  BannerButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoVideosContainer,
  NoVideosImg,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showPremiumPopup: true,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log('data:', data)

    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
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
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closePremiumPopup = () => {
    this.setState({showPremiumPopup: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const theme = isDarkMode ? 'dark' : 'light'

        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading theme={theme}>
              No search results found
            </FailureHeading>
            <FailureDescription>
              Try different key words or remove search filter
            </FailureDescription>
            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }

    return (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListContainer>
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

  renderLoadingView = () => (
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
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return this.renderLoadingView()
    }
  }

  renderPremiumCard = () => (
    <PremiumPopUpBanner data-testid="banner">
      <BannerCloseButton
        type="button"
        onClick={this.closePremiumPopup}
        data-testid="close"
      >
        <IoMdClose size={20} />
      </BannerCloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <BannerButton>GET IT NOW </BannerButton>
    </PremiumPopUpBanner>
  )

  render() {
    const {showPremiumPopup, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const theme = isDarkMode ? 'dark' : 'light'
          const color = isDarkMode ? '#f9f9f9' : '#181818'

          return (
            <HomeMainContainer data-testid="home" theme={theme}>
              <Header />
              <HomeRouteContainer>
                <SidePanelContainer>
                  <SidePanel />
                </SidePanelContainer>
                <HomeContainer>
                  {showPremiumPopup && this.renderPremiumCard()}
                  <SearchContainer>
                    <SearchInput
                      theme={theme}
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                    />
                    <SearchButton
                      type="button"
                      theme={theme}
                      onClick={this.getVideos}
                      data-testid="searchButton"
                    >
                      <BsSearch color={color} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderApiStatusContent()}
                </HomeContainer>
              </HomeRouteContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
