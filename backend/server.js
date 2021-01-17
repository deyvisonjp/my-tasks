const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port  = process.env.PORT||3333;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port} 🚀`);
} )

