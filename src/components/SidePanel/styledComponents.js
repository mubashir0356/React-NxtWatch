import styled from 'styled-components'

export const PanelContainer = styled.div`
  width: 20vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  margin-top: 2vh;
`

export const ContactUsContainer = styled.div`
  padding-left: 20px;
  margin: 0px;
  margin-bottom: 20px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ContactUsIcon = styled.img`
  width: 30px;
  margin: 0px 12px 0px 0px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#212121')};
`
