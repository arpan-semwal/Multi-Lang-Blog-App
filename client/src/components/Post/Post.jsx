import { Link } from "react-router-dom";
import "./Style.css";

const Post = ({ _id, title, summary, cover, language }) => {
  console.log("Language prop:", language); // Check if the language prop is received correctly

  return (
    <div className="container">
      <div className='post'>
        <div className="images">
          <Link to={`/post/${_id}`}>
            <img src={`http://localhost:4000/${cover}`} alt={title} />
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="summary">{summary}</p>
          <p>Language for this post: {language}</p> {/* Ensure the language prop is used */}
        </div>
      </div>
    </div>
  );
};

export default Post;
