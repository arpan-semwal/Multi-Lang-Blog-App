
import { Link } from "react-router-dom"
import "./Style.css"
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const Post = ({_id , title , summary , cover}) => {
    const { t } = useTranslation();
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
           
            
            <p className="summary">{summary}</p>
            <p>{t('readMore')}</p>
        </div> 
    </div>
   
    </div>
    
  )
}

export default Post
