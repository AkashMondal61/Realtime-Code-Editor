const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  d_id:{type:String},
  versions: [
    {
      content: { type: String, default: '' },
      users: [{ type: String }], // Array of user IDs
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Document', DocumentSchema);
