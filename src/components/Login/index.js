import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import {
  LoginContainer,
  LoginFormContainer,
  LoginForm,
  WebsiteLogo,
  Label,
  LoginInput,
  CheckBoxInputContainer,
  CheckBoxInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMsg: '',
    isLoginError: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, isLoginError: true})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  render() {
    const {
      passwordType,
      username,
      password,
      isLoginError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const logoUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeClassName = isDarkMode ? 'dark-theme' : 'light-theme'

          return (
            <LoginContainer theme={themeClassName}>
              <LoginFormContainer theme={themeClassName}>
                <WebsiteLogo src={logoUrl} alt="website logo" />
                <LoginForm onSubmit={this.onFormSubmit}>
                  <Label htmlFor="username" theme={themeClassName}>
                    USERNAME
                  </Label>
                  <LoginInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    theme={themeClassName}
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <Label htmlFor="password" theme={themeClassName}>
                    PASSWORD
                  </Label>
                  <LoginInput
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    theme={themeClassName}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <CheckBoxInputContainer>
                    <CheckBoxInput
                      type="checkbox"
                      id="showPassword"
                      onClick={this.onClickCheckBox}
                    />
                    <ShowPasswordLabel
                      theme={themeClassName}
                      htmlFor="showPassword"
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </CheckBoxInputContainer>
                  <LoginButton type="sumbit">Login</LoginButton>
                  <ErrorMsg>{isLoginError && `* ${errorMsg}`}</ErrorMsg>
                </LoginForm>
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
