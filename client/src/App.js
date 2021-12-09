import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import CreateUser from './components/CreateUser';
import EditPostFunction from './components/EditPostFunction';



function App() {
  return (
    <Router>
        <div className="container">
          <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<PostsList />} />
          <Route path="/edit/:id" element={<EditPostFunction />} />  
          <Route path="/create" element={<CreatePost />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
