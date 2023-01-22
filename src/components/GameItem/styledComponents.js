import styled from 'styled-components'

export const GamingCardItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 33%;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
    flex-direction: row;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  padding-top: 10px;
  text-decoration: 'none';
  width: 100%;
`

export const VideoTitle = styled.p`
  margin: 0px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 566px) {
    flex-direction: column;
  }
`
export const VideoDetailsText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #475569;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`
