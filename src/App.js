import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts/Posts";
import NewPost from "./pages/Posts/NewPost";
import Post from "./pages/Posts/Post";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Articles/Article";
import Comments from "./pages/Comments/Comments";
import Comment from "./pages/Comments/Comment";
import Layout from "./pages/Layout";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Posts />}>
            <Route path='new' element={<NewPost />} /> {/*A nested route!*/}
            <Route path=':postId' element={<Post />} /> {/*A nested route!*/}
          </Route>
          <Route path='articles' element={<Articles />} />
          <Route path='articles/:articleId' element={<Article />} />
          <Route path='articles/:articleId/comments' element={<Comments />} />
          <Route path='articles/:articleId/comments/:commentId' element={<Comment />} />
        </Route>
        <Route path='admin' element={<Admin />} />
      </Routes>
  </Router>
  );
}

export default App;

{/* 
<Route path='/' element={<Home />}>
  <Route path='about' element={<About />} />
  <Route path='posts' element={<Posts />}>
    <Route path='new' element={<NewPost />} /> 
    <Route path=':postId' element={<Post />} />
  </Route>
</Route>
*/ }