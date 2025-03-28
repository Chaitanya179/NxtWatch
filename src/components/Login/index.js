import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactContext from '../../Context/ReactContext'
import {
  MainDiv,
  LoginCard,
  LoginImage,
  Form,
  Label,
  Input,
  Button,
  ShowPassword,
  Error,
} from './styledcomponents'

class Login extends Component {
  state = {show: false, username: '', password: '', error: false, errorMsg: ''}

  show = event => {
    this.setState({show: event.target.checked})
  }

  success = data => {
    Cookies.set('jwtToken', data.jwt_token, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  fetchLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    if (response.ok) {
      this.success(data)
    } else {
      this.setState({
        error: true,
        errorMsg: data.error_msg,
        username: '',
        password: '',
      })
    }
  }

  setUser = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactContext.Consumer>
        {value => {
          const {show, username, password, error, errorMsg} = this.state
          const {dark} = value
          const showing = show ? 'text' : 'password'
          const imageUrl = dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          console.log(this.state)
          return (
            <MainDiv dark={dark}>
              <LoginCard dark={dark}>
                <LoginImage src={imageUrl} alt="website logo" />
                <Form onSubmit={this.fetchLogin}>
                  <Label htmlFor="username" dark={dark}>
                    USERNAME
                  </Label>
                  <br />
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.setUser}
                    value={username}
                    dark={dark}
                  />
                  <br />
                  <Label htmlFor="password" dark={dark}>
                    PASSWORD
                  </Label>
                  <br />
                  <Input
                    type={showing}
                    id="password"
                    placeholder="Password"
                    onChange={this.setPassword}
                    value={password}
                    dark={dark}
                  />
                  <br />
                  <ShowPassword>
                    <input
                      type="checkbox"
                      id="showpassword"
                      onClick={this.show}
                      dark={dark}
                    />
                    <Label htmlFor="showpassword" dark={dark}>
                      Show Password
                    </Label>
                  </ShowPassword>
                  <br />
                  <Button type="submit">Login</Button>
                  {error && <Error>{errorMsg}</Error>}
                </Form>
              </LoginCard>
            </MainDiv>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Login
