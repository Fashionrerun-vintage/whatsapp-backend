
require('dotenv').config();
const express = require('express');
const app = express();
const sendMessageRoute = require('./routes/sendMessage');

app.use(express.json());
app.use('/send-message', sendMessageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
