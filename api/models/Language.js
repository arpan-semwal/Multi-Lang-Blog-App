// models/Language.js
const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  languageCode: String, // Language code, e.g., 'en', 'es'
  titleTranslation: String, // Translated title
  summaryTranslation: String, // Translated summary
  contentTranslation: String, // Translated content
});

module.exports = mongoose.model('Language', languageSchema);
