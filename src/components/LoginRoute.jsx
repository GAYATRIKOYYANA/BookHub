import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { LOGIN_API_URL } from '../endpoints'
import { LOGIN_HERO_IMG, LOGO_IMG } from '../constants/images'

const LoginRoute = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  if (Cookies.get('jwt_token') !== undefined) return <Navigate to="/" replace />

  const onSubmit = async (event) => {
    event.preventDefault()
    if (username.trim() === '' || password === '') {
      setShowError(true)
      setErrorMsg('Please enter username and password')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()
      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token, { expires: 30 })
        navigate('/', { replace: true })
      } else {
        setShowError(true)
        setErrorMsg(data.error_msg)
      }
    } catch {
      setShowError(true)
      setErrorMsg('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="login-page">
      <img src={LOGIN_HERO_IMG} alt="website login" className="login-hero" />
      <form className="login-card" onSubmit={onSubmit}>
        <img src={LOGO_IMG} alt="login website logo" className="login-logo" />
        <label htmlFor="username">Username*</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoComplete="username" />
        <label htmlFor="password">Password*</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="current-password" />
        {showError && <p className="error-message" role="alert">{errorMsg}</p>}
        <button type="submit" className="primary-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginRoute
