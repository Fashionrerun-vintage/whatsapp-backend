
const express = require('express');
const router = express.Router();
const { sendMessage } = require('../utils/whatsappAPI');

router.post('/', async (req, res) => {
  const { to, message } = req.body;
  try {
    const response = await sendMessage(to, message);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
