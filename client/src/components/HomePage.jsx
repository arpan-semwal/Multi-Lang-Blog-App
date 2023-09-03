
import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation"
import Post from "./Post/Post";

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  })


  return (
    <div>
      <Navigation/>
      {
        posts.length > 0 && posts.map(post => (
          // eslint-disable-next-line react/jsx-key
          <Post {...post}/>
        ))
      }
      
      
    </div>
  )
}

export default HomePage
