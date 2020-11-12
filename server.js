const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static(path.join()));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));