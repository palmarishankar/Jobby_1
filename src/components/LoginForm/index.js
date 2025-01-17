import React,{ useState} from 'react'
import Cookies from 'js-cookie'
import {useNavigate,Navigate} from 'react-router'

import './index.css'
const LoginForm=()=>{
  const navigate=useNavigate();
// class LoginForm extends Component {
  const[username,setUserName]=useState('')
  const[password,setUserPassword]=useState('')
  const[showSubmitError,setError]=useState(false)
  const[errorMsg,setErrorMsg,]=useState('')
  // state = {
  //   username: '',
  //   password: '',
  //   showSubmitError: false,
  //   errorMsg: '',
  // }
  

  const onSubmitSuccess = jwtToken => {
    // const {history} = this.props
    // console.log(this.props)
    // console.log(history)
    
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    navigate("/",{replace:true})
    // history.replace('/')
    // return <Navigate to="/" replace/>
  }

  const onSubmitFailure = errorMsg => {
    setErrorMsg(errorMsg)
    setError(true)
    // this.setState({showSubmitError: true, errorMsg})
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    // const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const onEnterUsername = event => setUserName(event.target.value)


  const onChangePassword = event => {
    setUserPassword(event.target.value)
  }

  const renderUsername = () => (
    // const {username} = this.state

    // return (
      <>
        <label className="label" htmlFor="userName">
          USERNAME
        </label>
        <input
          type="text"
          id="userName"
          placeholder="Username"
          className="user-input"
          value={username}
          onChange={onEnterUsername}
        />
      </>
    // )
  )

  const renderPassword = () => (
    // const {password} = this.state

    // return (
      <>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="user-input"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
      </>
    // )
  )

  // render() {
    // const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }

    return (
      <div className="jobby-app-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={onSubmitForm}>
            <div className="input-container">{renderUsername()}</div>
            <div className="input-container">{renderPassword()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
// }

export default LoginForm
