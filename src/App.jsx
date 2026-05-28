import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<div style={{ padding: '20px', fontFamily: 'sans-serif' }}><h1>Let's Start! 🚀</h1><p>Yahan se hum apna custom E-commerce frontend code karenge.</p></div>} />

        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />

        <Route path="/about" element={<div style={{ padding: '20px', fontFamily: 'sans-serif' }}><h1>About Us</h1><p>Learn more about our company.</p></div>} />

      </Routes>
    </Router>
  )
}

export default App;