import React from 'react'

const ReactContext = React.createContext({
  dark: false,
  saved: [],
  setMode: () => {},
  setSave: () => {},
})

export default ReactContext
