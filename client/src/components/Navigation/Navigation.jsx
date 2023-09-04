import "./style.css";
import {Link} from "react-router-dom"
const Navigation = () => {
  return (
    <main>
       <header>
        <a href="/" className="logo">MyBlog</a>

        <nav>
            <Link to="/createPost">CreatePost</Link>
        </nav>
    </header>
    </main>
   
  )
}

export default Navigation
