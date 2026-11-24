import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { LOGO_IMG } from '../constants/images'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const onLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', { replace: true })
  }

  const cls = (path) => (pathname === path ? 'nav-link active' : 'nav-link')

  return (
    <header className="header">
      <Link to="/">
        <img src={LOGO_IMG} alt="website logo" className="logo-img" />
      </Link>
      <button className="menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
        <ul className="nav-list">
          <li>
            <Link to="/" className={cls('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/shelf" className={cls('/shelf')} onClick={() => setMenuOpen(false)}>Bookshelves</Link>
          </li>
          <li>
            <button type="button" className="logout-btn" onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
