import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import Post from './pages/Posts';
import NotFound from './pages/NotFound'; //Create a 404 page


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} /> // Catch-all route
      </Routes>
    </Router>
  )
}

export default App
