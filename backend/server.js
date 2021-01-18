const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port  = process.env.PORT||3333;

app.use(cors());
app.use(express.json());

//Configuração para o banco com mongo
const uri = process.env.DATABASE_CONNECTION;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

    
// Configurando Rotas
const tasksRouter = require('./src/routes/tasks');
const usersRouter = require('./src/routes/user');

app.use('/exercises', tasksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port} 🚀`);
});

