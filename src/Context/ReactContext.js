import React from 'react'

const ReactContext = React.createContext({
  dark: false,
  active: 'Home',
  saved: [],
  setMode: () => {},
  setActive: () => {},
  setSave: () => {},
})

export default ReactContext
