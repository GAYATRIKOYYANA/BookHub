import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import Loader from '../Loader'
import FailureView from '../FailureView'
import apiStatusConstants from '../../constants/apiStatusCodesConstants'
import { TOP_RATED_BOOKS_API_URL } from '../../endpoints'

const HomeRoute = () => {
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const [status, setStatus] = useState(apiStatusConstants.inProgress)
  const [books, setBooks] = useState([])

  const getTopRated = useCallback(async () => {
    setStatus(apiStatusConstants.inProgress)
    try {
      const response = await fetch(TOP_RATED_BOOKS_API_URL, {
        headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` },
      })
      if (!response.ok) throw new Error('failed')
      const data = await response.json()
      setBooks(
        data.books.map((b) => ({ id: b.id, authorName: b.author_name, coverPic: b.cover_pic, title: b.title }))
      )
      setStatus(apiStatusConstants.success)
    } catch {
      setStatus(apiStatusConstants.failure)
    }
  }, [])

  useEffect(() => {
    getTopRated()
  }, [getTopRated])

  const scroll = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const renderSuccess = () => (
    <div className="carousel">
      <button type="button" className="carousel-btn" onClick={() => scroll(-1)} aria-label="Previous books">‹</button>
      <ul className="carousel-track" ref={trackRef}>
        {books.map((book) => (
          <li key={book.id} className="carousel-item">
            <Link to={`/books/${book.id}`} className="top-book-link">
              <img src={book.coverPic} alt={book.title} className="top-book-img" />
              <h3 className="top-book-title">{book.title}</h3>
              <p className="author">{book.authorName}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" className="carousel-btn" onClick={() => scroll(1)} aria-label="Next books">›</button>
    </div>
  )

  const renderBody = () => {
    switch (status) {
      case apiStatusConstants.inProgress: return <Loader />
      case apiStatusConstants.success: return renderSuccess()
      case apiStatusConstants.failure: return <FailureView onRetry={getTopRated} />
      default: return null
    }
  }

  return (
    <div className="page">
      <Header />
      <main className="container">
        <section className="intro">
          <h1>Find Your Next Favorite Books?</h1>
          <p>You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.</p>
          <button type="button" className="primary-btn intro-btn" onClick={() => navigate('/shelf')}>Find Books</button>
        </section>
        <section className="top-rated" aria-labelledby="top-heading">
          <div className="top-rated-head">
            <h2 id="top-heading">Top Rated Books</h2>
            <button type="button" className="primary-btn small" onClick={() => navigate('/shelf')}>Find Books</button>
          </div>
          {renderBody()}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomeRoute
