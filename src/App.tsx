import './App.css'
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home component
import Post from './pages/Posts';
import NotFound from './pages/NotFound'; //Create a 404 page
import Navbar from './components/Navbar'; //Import navbar



function App() {

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          }>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="*" element={<NotFound />} /> // Catch-all route
            </Routes>
          </Suspense>
        </div>
      </Router>

      {/* <Navbar /> */}
    </>
  )
}

export default App
