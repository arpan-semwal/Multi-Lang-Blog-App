
import { Link } from "react-router-dom"
import "./Style.css"
// eslint-disable-next-line react/prop-types
const Post = ({_id , title , summary , cover}) => {
  return (
    <div className="container">
    <div className='post'>
        <div className="images">
            <Link to={`/post/${_id}`}>
            <img src={`http://localhost:4000/` + cover}/>
            </Link>
           
        </div>
        <div className="texts">
        <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
        </Link>
           
            {/* <p className="info">
                <a className="author">Arpan Semwal</a>
               
            </p> */}
            <p className="summary">{summary}</p>
        </div> 
    </div>
   
    </div>
    
  )
}

export default Post
