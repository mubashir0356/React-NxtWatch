import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import ThemeContext from './Context/ThemeContext'

import './App.css'
import ActiveRouteContext from './Context/ActiveRouteContext'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, activeMenu: activeMenuConstants.home}

  toggleTheme = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  changeActiveMenu = activeMenu => {
    this.setState({activeMenu})
  }

  render() {
    const {isDarkMode, activeMenu} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkMode, toggleTheme: this.toggleTheme}}
      >
        <ActiveRouteContext.Provider
          value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </ActiveRouteContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
