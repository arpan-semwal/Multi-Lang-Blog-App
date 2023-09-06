import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Post from "./Post/Post";
import LanguageSelector from '../components/LanguageSelection/LanguageSelector';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    console.log('Selected language:', selectedLanguage);
    fetch(`http://localhost:4000/post?language=${selectedLanguage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setPosts(data);
      });
  }, [selectedLanguage]);

  const handleChangeLanguage = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <div>
      <Navigation />
      <LanguageSelector
        languages={['en', 'es', 'fr', 'de', 'it', 'ja']}
        selectedLanguage={selectedLanguage}
        onChangeLanguage={handleChangeLanguage}
      />

      {posts.length > 0 &&
        posts.map((post) => (
          <Post key={post._id} {...post} language={post.language} />
        ))}
    </div>
  );
};

export default HomePage;
