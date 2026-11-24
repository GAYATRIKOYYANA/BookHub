# 📚 Book Hub

Book Hub is a responsive React web application that allows users to explore books, discover top-rated titles, search for books, filter books by reading status, and view detailed information about individual books.

Live Link:https:https://BookHub12.ccbp.tech

Screenshot:
<img width="1892" height="962" alt="image" src="https://github.com/user-attachments/assets/d97c6d58-49a1-4993-af65-0f7d5bf8c66a" />
<img width="1885" height="965" alt="image" src="https://github.com/user-attachments/assets/3cb2da60-e4d8-4dbe-87da-366959cdb0d7" />
<img width="1882" height="967" alt="image" src="https://github.com/user-attachments/assets/1f662929-df74-4347-bcbd-06b3f9e7f81b" />

## 🚀 Features

- **User Authentication:** Login using username and password.
- **Protected Routes:** Restrict access to authenticated users.
- **Home Page:** Display top-rated books.
- **Bookshelves:** Browse books by reading status.
- **Search Books:** Search for books by title or author.
- **Book Details:** View book information, author details, and ratings.
- **Logout:** Securely log out and remove authentication tokens.
- **Responsive Design:** Supports desktop, tablet, and mobile devices.
- **API Integration:** Fetch book data from REST APIs.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- HTML5
- CSS3
- React Router DOM
- React Hooks
- REST API
- Fetch API
- js-cookie
- Vite

## 📂 Project Structure

```text
BookHubProject/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── LoginRoute/
│   │   ├── HomeRoute/
│   │   ├── BookshelvesRoute/
│   │   ├── BookDetailsRoute/
│   │   ├── BookCard/
│   │   ├── ProtectedRoute/
│   │   └── NotFound/
│   ├── constants/
│   │   └── apiStatusCodesConstants.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── endpoints.js
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd BookHubProject
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit the local URL displayed in your terminal.

## 🔐 Authentication

The application uses JWT-based authentication.

Users must log in to access protected pages. The authentication token is stored using cookies.

## 🌐 API Integration

The application communicates with REST APIs to retrieve:

- User authentication details.
- Top-rated books.
- Bookshelf information.
- Individual book details.

## 📱 Responsive Design

The application is designed to work across:
- Desktop computers
- Tablets
- Mobile devices

## 🎯 Learning Outcomes

Through this project, I practiced:

- React functional components and class components.
- React Hooks: useState, useEffect, useParams, useNavigate, and useLocation.
- React Router and navigation.
- API integration using Fetch API.
- JWT authentication and protected routes.
- Conditional rendering.
- Search and filtering functionality.
- Responsive web design.

## 👩‍💻 Author

Developed as an individual React project to practice frontend development and API integration.
