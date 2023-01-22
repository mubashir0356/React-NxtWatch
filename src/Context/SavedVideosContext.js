import React from 'react'

const SavedVideosContext = React.createContext({
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSaveButton: () => {},
})

export default SavedVideosContext
