import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import Notfound from './components/Notfound'
import PlayVideo from './components/PlayVideo'
import ProtectedRoute from './components/ProtectedRoute'
import ReactContext from './Context/ReactContext'
import './App.css'

class App extends Component {
  state = {dark: false, saved: []}

  setMode = () => {
    this.setState(prev => ({dark: !prev.dark}))
  }

  setSave = video => {
    this.setState(prev => {
      const {saved} = this.state
      const isPresent = saved.findIndex(i => i.id === video.id)
      if (isPresent === -1) {
        return {saved: [...prev.saved, video]}
      }
      return {saved: prev.saved.filter(i => i.id !== video.id)}
    })
  }

  render() {
    const {dark, saved} = this.state
    return (
      <ReactContext.Provider
        value={{
          dark,
          saved,
          setMode: this.setMode,
          setSave: this.setSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={PlayVideo} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <Route component={Notfound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
