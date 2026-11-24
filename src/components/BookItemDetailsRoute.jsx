import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
import FailureView from './FailureView'
import apiStatusConstants from '../constants/apiStatusCodesConstants'
import { BOOK_DETAILS_API_URL } from '../endpoints'

const BookItemDetailsRoute = () => {
  const { id } = useParams()
  const [status, setStatus] = useState(apiStatusConstants.inProgress)
  const [book, setBook] = useState(null)

  const getBook = useCallback(async () => {
    setStatus(apiStatusConstants.inProgress)
    try {
      const response = await fetch(`${BOOK_DETAILS_API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get('jwt_token')}` },
      })
      if (!response.ok) throw new Error('failed')
      const data = await response.json()
      const d = data.book_details
      setBook({
        id: d.id,
        authorName: d.author_name,
        coverPic: d.cover_pic,
        aboutBook: d.about_book,
        rating: d.rating,
        readStatus: d.read_status,
        title: d.title,
        aboutAuthor: d.about_author,
      })
      setStatus(apiStatusConstants.success)
    } catch {
      setStatus(apiStatusConstants.failure)
    }
  }, [id])

  useEffect(() => {
    getBook()
  }, [getBook])

  const renderSuccess = () => (
    <article className="details-card">
      <div className="details-top">
        <img src={book.coverPic} alt={book.title} className="details-cover" />
        <div className="details-info">
          <h1>{book.title}</h1>
          <p className="author">{book.authorName}</p>
          <p className="rating">Avg Rating <span aria-hidden="true">★</span> {book.rating}</p>
          <p>Status: <span className="status">{book.readStatus}</span></p>
        </div>
      </div>
      <hr />
      <h2>About Author</h2>
      <p>{book.aboutAuthor}</p>
      <h2>About Book</h2>
      <p>{book.aboutBook}</p>
    </article>
  )

  const renderBody = () => {
    switch (status) {
      case apiStatusConstants.inProgress: return <Loader />
      case apiStatusConstants.success: return renderSuccess()
      case apiStatusConstants.failure: return <FailureView onRetry={getBook} />
      default: return null
    }
  }

  return (
    <div className="page">
      <Header />
      <main className="container">{renderBody()}</main>
      <Footer />
    </div>
  )
}

export default BookItemDetailsRoute
