import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Post from "./pages/Post";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
