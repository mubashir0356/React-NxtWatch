import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../Context/ThemeContext'
import SavedVideosContext from '../../Context/SavedVideosContext'

import Header from '../Header'
import SidePanel from '../SidePanel'

import {
  VideoItemDetailsContainer,
  MainContainer,
  SidePanelContainer,
  VideoItemContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideoDetailContainer,
  VideoPlayerContainer,
  VideoTextContainer,
  VideoTitle,
  LikesAndViewsContainer,
  ViewsAndPostedContainer,
  VideoDetailsText,
  ListItem,
  VideoDetailsText1,
  VideoItemButton,
  LikeDislikeContainer,
  LikeDislikeText,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetailsText,
  ChannelDetailsText2,
  VideoDescriptionText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const fetchedData = {
        videoDetails: data.video_details,
      }

      const {videoDetails} = fetchedData

      const formattedData = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateLikeStatus = () => {
    this.setState(prev => ({like: !prev.like, dislike: false}))
  }

  updateDislikeStatus = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: false}))
  }

  renderSuccessView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const theme = isDarkMode ? 'dark' : 'light'

          const highlightLikeButton = like ? 'active' : 'not-active'
          const highlightDislikeButton = dislike ? 'active' : 'not-active'

          return (
            <VideoDetailContainer>
              <VideoPlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoPlayerContainer>
              <VideoTextContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <LikesAndViewsContainer>
                  <ViewsAndPostedContainer>
                    <VideoDetailsText>{`${viewCount} views`}</VideoDetailsText>
                    <ul className="published-at-bulletin">
                      <ListItem>
                        <VideoDetailsText1>{`${postedAt} ago`}</VideoDetailsText1>
                      </ListItem>
                    </ul>
                  </ViewsAndPostedContainer>
                  <LikeDislikeContainer>
                    <VideoItemButton
                      type="button"
                      theme={highlightLikeButton}
                      onClick={this.updateLikeStatus}
                    >
                      <BiLike size={22} style={{paddingTop: '6px'}} />
                      Like
                    </VideoItemButton>
                    <VideoItemButton
                      type="button"
                      theme={highlightDislikeButton}
                      onClick={this.updateDislikeStatus}
                    >
                      <BiDislike size={22} style={{paddingTop: '6px'}} />
                      Dislike
                    </VideoItemButton>
                    <SavedVideosContext.Consumer>
                      {savedValue => {
                        const {updateSaveButton, savedVideosList} = savedValue

                        const isVideoInSavedList = savedVideosList.find(
                          eachVid => eachVid.id === id,
                        )

                        const saveButtonActive =
                          isVideoInSavedList !== undefined
                            ? 'active'
                            : 'not-active'

                        const saveButtonText =
                          isVideoInSavedList !== undefined ? 'Saved' : 'Save'

                        return (
                          <VideoItemButton
                            type="button"
                            theme={saveButtonActive}
                            onClick={() => updateSaveButton(videoDetails)}
                          >
                            <RiMenuAddLine
                              size={20}
                              style={{paddingTop: '6px'}}
                            />
                            <LikeDislikeText>{saveButtonText}</LikeDislikeText>
                          </VideoItemButton>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </LikeDislikeContainer>
                </LikesAndViewsContainer>
                <hr />
                <ChannelDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelDetailsText theme={theme}>
                      {name}
                    </ChannelDetailsText>
                    <ChannelDetailsText2>{subscriberCount}</ChannelDetailsText2>
                  </div>
                </ChannelDetailsContainer>
                <VideoDescriptionText theme={theme}>
                  {description}
                </VideoDescriptionText>
              </VideoTextContainer>
            </VideoDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
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
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.getVideoDetails}>
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
            <VideoItemDetailsContainer theme={theme}>
              <Header />
              <MainContainer>
                <SidePanelContainer>
                  <SidePanel />
                </SidePanelContainer>
                <VideoItemContainer
                  data-testid="videoItemDetails"
                  theme={theme}
                >
                  {this.renderApiStatusContent()}
                </VideoItemContainer>
              </MainContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
