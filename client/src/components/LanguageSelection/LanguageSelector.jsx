// LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onChangeLanguage }) => {
  return (
    <div>
      <label>Select Language:</label>
      <select value={selectedLanguage} onChange={(e) => onChangeLanguage(e.target.value)}>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
