import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import ThemeContext from './Context/ThemeContext'
import ActiveRouteContext from './Context/ActiveRouteContext'
import SavedVideosContext from './Context/SavedVideosContext'

import './App.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    isDarkMode: false,
    activeMenu: activeMenuConstants.home,
    savedVideosList: [],
    save: false,
  }

  toggleTheme = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  changeActiveMenu = activeMenu => {
    this.setState({activeMenu})
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state

    const updatedList = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )

    this.setState({savedVideosList: updatedList})
  }

  updateSavedVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSaveButton = videoDetails => {
    this.setState(prev => ({save: !prev.save}))
    this.updateSavedVideosList(videoDetails)
  }

  render() {
    const {isDarkMode, activeMenu, save, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkMode, toggleTheme: this.toggleTheme}}
      >
        <SavedVideosContext.Provider
          value={{
            save,
            savedVideosList,
            addVideosToSavedVideos: this.addVideosToSavedVideos,
            deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
            updateSaveButton: this.updateSaveButton,
          }}
        >
          <ActiveRouteContext.Provider
            value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute exact path="/bad-path" component={NotFound} />
              <Redirect to="/bad-path" />
            </Switch>
          </ActiveRouteContext.Provider>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
