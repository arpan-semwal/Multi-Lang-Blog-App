// // LanguageSelector.js

// import { useState } from "react";


// const LanguageSelector = ({ setPosts }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState(''); // State to store the selected language

//   const handleLanguageChange = (language ) => {
   
//     setSelectedLanguage(language);

//     // Fetch posts in the selected language and update the state
//     fetch(`http://localhost:4000/post?language=${language}`)
//       .then((response) => response.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   };

//   return (
//     <div>
//       <button onClick={() => handleLanguageChange('en')}>English</button>
//       <button onClick={() => handleLanguageChange('es')}>Español</button>
//       {/* Add more language buttons as needed */}
//     </div>
//   );
// };

// export default LanguageSelector;
