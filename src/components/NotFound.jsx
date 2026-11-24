import { Link } from 'react-router-dom'
import { NOT_FOUND_IMG } from '../constants/images'

const NotFound = () => (
  <div className="not-found">
    <img src={NOT_FOUND_IMG} alt="not found" className="state-img wide" />
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found. Please go back to the homepage.</p>
    <Link to="/">
      <button type="button" className="primary-btn">Go Back to Home</button>
    </Link>
  </div>
)

export default NotFound
