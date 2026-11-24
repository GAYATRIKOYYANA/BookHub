import {useCallback, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from './Header'
import Footer from './Footer'
import Loader from './Loader'
import FailureView from './FailureView'
import apiStatusConstants from '../constants/apiStatusCodesConstants'
import {NO_BOOKS_IMG} from '../constants/images'
import {BOOKS_API_URL} from '../endpoints'

const bookshelvesList = [
  {id: 'qA1', value: 'ALL', label: 'All'},
  {id: 'qA2', value: 'READ', label: 'Read'},
  {id: 'qA3', value: 'CURRENTLY_READING', label: 'Currently Reading'},
  {id: 'qA4', value: 'WANT_TO_READ', label: 'Want to Read'},
]

const BookshelvesRoute = () => {
  const [status, setStatus] = useState(apiStatusConstants.inProgress)
  const [books, setBooks] = useState([])
  const [shelf, setShelf] = useState('ALL')
  const [searchInput, setSearchInput] = useState('')
  const [searchText, setSearchText] = useState('')

  const getBooks = useCallback(async () => {
    setStatus(apiStatusConstants.inProgress)
    try {
      const url = `${BOOKS_API_URL}?shelf=${shelf}&search=${encodeURIComponent(
        searchText,
      )}`
      const response = await fetch(url, {
        headers: {Authorization: `Bearer ${Cookies.get('jwt_token')}`},
      })
      if (!response.ok) throw new Error('failed')
      const data = await response.json()
      setBooks(
        data.books.map(b => ({
          id: b.id,
          title: b.title,
          readStatus: b.read_status,
          rating: b.rating,
          authorName: b.author_name,
          coverPic: b.cover_pic,
        })),
      )
      setStatus(apiStatusConstants.success)
    } catch {
      setStatus(apiStatusConstants.failure)
    }
  }, [shelf, searchText])

  useEffect(() => {
    getBooks()
  }, [getBooks])

  const onSearch = () => {
    setSearchText(searchInput.trim())
  }

  const activeLabel = bookshelvesList.find(s => s.value === shelf).label

  const renderSuccess = () => {
    if (books.length === 0) {
      return (
        <div className="no-books">
          <img src={NO_BOOKS_IMG} alt="no books" className="state-img" />
          <p>Your search for {searchText} did not find any matches.</p>
        </div>
      )
    }
    return (
      <ul className="books-list">
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} className="book-card">
              <img
                src={book.coverPic}
                alt={book.title}
                className="book-cover"
              />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">{book.authorName}</p>
                <p className="rating">
                  Avg Rating <span aria-hidden="true">★</span> {book.rating}
                </p>
                <p>
                  Status: <span className="status">{book.readStatus}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const renderBody = () => {
    switch (status) {
      case apiStatusConstants.inProgress:
        return <Loader />
      case apiStatusConstants.success:
        return renderSuccess()
      case apiStatusConstants.failure:
        return <FailureView onRetry={getBooks} />
      default:
        return null
    }
  }

  return (
    <div className="page">
      <Header />
      <main className="container shelf-layout">
        <aside className="sidebar">
          <h2>Bookshelves</h2>
          <ul className="shelf-tabs">
            {bookshelvesList.map(s => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`shelf-btn ${shelf === s.value ? 'active' : ''}`}
                  aria-pressed={shelf === s.value}
                  onClick={() => setShelf(s.value)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="shelf-content">
          <div className="shelf-head">
            <h1>{activeLabel} Books</h1>
            <div className="search" role="search">
              <label htmlFor="book-search" className="visually-hidden">
                Search books
              </label>
              <input
                id="book-search"
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onSearch()}
              />
              <button
                type="button"
                className="search-btn"
                aria-label="Search"
                data-testid="searchButton"
                onClick={onSearch}
              >
                🔍
              </button>
            </div>
          </div>
          {renderBody()}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BookshelvesRoute