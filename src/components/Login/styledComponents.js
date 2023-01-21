import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark-theme' ? '#0f0f0f' : '#f9f9f9'};
  min-height: 100vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark-theme' ? '#181818' : ' #ffffff'};
  box-shadow: 0px 0px 5px #00000050;
  border-radius: 15px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media screen and (min-width: 768px) {
    min-width: 30%;
    max-width: 40%;
  }
`

export const WebsiteLogo = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const LoginForm = styled.form`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  padding: 5px 30px 5px 0px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark-theme' ? '#ffffff' : ' #475569')};
  font-weight: 600;
`

export const LoginInput = styled.input`
  height: 35px;
  padding-left: 10px;
  background-color: ${props =>
    props.theme === 'dark-theme' ? 'black' : 'white'};
  border: 1px solid #94a3b8;
  border-radius: 5px;
  margin-top: 2px;
  color: ${props => (props.theme === 'dark-theme' ? 'white' : 'black')};
  margin-bottom: 15px;
  outline: none;
`
export const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBoxInput = styled.input`
  height: 15px;
  width: 15px;
`

export const ShowPasswordLabel = styled.label`
  font-weight: 400;
  font-family: 'Roboto';
  margin-left: 5px;
  font-size: 15px;
  color: ${props => (props.theme === 'dark-theme' ? 'white' : 'black')};
`

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 7px 0px 7px 0px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0px;
  font-size: 14px;
  padding-top: 6px;
  font-weight: 400;
  align-self: flex-start;
`
