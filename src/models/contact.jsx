const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
