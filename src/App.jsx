import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import BookshelvesRoute from './components/BookshelvesRoute'
import BookItemDetailsRoute from './components/BookItemDetailsRoute'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/" element={<ProtectedRoute><HomeRoute /></ProtectedRoute>} />
      <Route path="/shelf" element={<ProtectedRoute><BookshelvesRoute /></ProtectedRoute>} />
      <Route path="/books/:id" element={<ProtectedRoute><BookItemDetailsRoute /></ProtectedRoute>} />
      <Route path="/bad-path" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/bad-path" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App
