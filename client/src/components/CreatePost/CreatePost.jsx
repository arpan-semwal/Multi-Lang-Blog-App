import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./Style.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const CreatePost = () => {

  const [title , setTitle] = useState('');
  const [summary , setSummary] = useState('');
  const [content , setContent] = useState('');
  const [files , setFiles] = useState('');
  const [redirect , setRedirect] = useState(false)

  async function createNewPost (ev){
    const data = new FormData();
    data.set('title' , title);
    data.set('summary' , summary);
    data.set('content', content);
     data.set('file' ,files[0] )
    ev.preventDefault();
    console.log(files);
     const response = await fetch('http://localhost:4000/post' , {
     method:'POST',
     body:data,
     });


     if(response.ok){
      setRedirect(true);
     }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

 

  return (
    <div>
      <Navigation/>
      <div className="center-card">
      
      <div className="card">
        <div>
          hello
        </div>
        <form onSubmit={createNewPost}>
         
          <input 
            type="text" 
            id="title" 
            placeholder="Title"
            value={title} 
            onChange={ev => setTitle(ev.target.value)} 
          />
  
          <input 
            type="text" 
            id="summary" 
            placeholder="Summary" 
            value={summary}
            onChange={ev => setSummary(ev.target.value)}
          />
  
          <input 
            type="file" 
            id="file" 
          
            onChange={ev => setFiles(ev.target.files)}
           />



          <ReactQuill value={content} id="editor" className="editor"  onChange={newValue => setContent(newValue)}/>
  
          <button>Create Post</button>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default CreatePost;
