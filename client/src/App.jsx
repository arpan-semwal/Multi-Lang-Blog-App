import {BrowserRouter , Routes  , Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import CreatePost from "./components/CreatePost/CreatePost";
import PostPage from "./components/PostPage/PostPage";

const App = () => {
  return (
    <BrowserRouter>
   
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostPage/>}/>

      </Routes>
   
      
    
    </BrowserRouter>
  )
}

export default App
