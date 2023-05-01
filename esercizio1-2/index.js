const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
const moviesRouter = require('./src/routes/moviesRoutes');

global.appRoot = path.resolve(__dirname);


const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/db_movies').then(()=> console.log("connected to db")).catch((e)=>console.log(e));

app.use(cors())

//Per gestire i parametri passati nel corpo della richiesta http.

app.use(express.json());
app.use('/movies', moviesRouter);

app.use('/movies-crud', (req, res) => {
  res.sendFile(path.join(__dirname, "www", "movies-crud.html"));
})

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, "www", "movies.html"))
});



app.use((req, res)=> {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT,() =>{
  console.log('Node API server started on port '+PORT);
});
