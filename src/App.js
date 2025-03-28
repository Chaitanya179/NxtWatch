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
  state = {dark: false, active: 'Home', saved: []}

  setMode = () => {
    this.setState(prev => ({dark: !prev.dark}))
  }

  setActive = name => {
    this.setState({active: name})
  }

  setSave = video => {
    this.setState(prev => ({saved: [...prev.saved, video]}))
  }

  render() {
    const {dark, active, saved} = this.state
    return (
      <ReactContext.Provider
        value={{
          dark,
          active,
          saved,
          setMode: this.setMode,
          setActive: this.setActive,
          setSave: this.setSave,
        }}
      >
        <Switch>
          <Route exact path='/login' Component={Login} />
          <ProtectedRoute exact path='/' Component={Home} />
          <ProtectedRoute exact path='/videos/:id' component={PlayVideo} />
          <ProtectedRoute exact path='/trending' Component={Trending} />
          <ProtectedRoute exact path='/gaming' Component={Gaming} />
          <ProtectedRoute exact path='/saved-videos' Component={Saved} />
          <Route Component={Notfound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
