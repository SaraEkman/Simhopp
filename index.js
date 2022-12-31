const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
// const cors = require('cors');
// app.use(cors());

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));