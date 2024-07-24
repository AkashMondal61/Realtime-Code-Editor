const express = require('express');
const router = express.Router();
const Document=require("../models/Document")
let documentContent = '';
const User = require('../models/User');

router.get('/', (req, res) => {
  res.json({ content: documentContent });
});

router.post('/:documentId', async (req, res) => {
  
  const { documentId } = req.params;
  const { content, users } = req.body;
  console.log(documentId)
  try {
    let document = await Document.findOne({ d_id: documentId });
    const documentLink = `/document/${documentId}`;
    if (document) {
    
      document.versions.push({ content, users });
      await document.save();
      res.json({ message: 'Document updated successfully!' });
    } else {
      // Create a new document
      document = new Document({
        d_id: documentId,
        versions: [{ content, users }]
      });
      await Promise.all(users.map(async (username) => {
        let user = await User.findOne({ username });
        if (user && !user.documentLinks.includes(documentLink)) {
          user.documentLinks.push(documentLink);
          await user.save();
        }
      }));
      await document.save();
      res.json({ message: 'Document created successfully!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error saving document', error });
  }
});

module.exports = router;
