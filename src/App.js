// // src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import CreatePost from './components/CreatePost';
export default function App () {
  return(
    <Router>

      <Routes>
      <Route path="/" element={<AllPosts />} />
     <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}