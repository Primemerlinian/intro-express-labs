// import modules

import express from 'express'

// import the todo data
import { cars } from './data/cars-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/cars')
})

app.get('/cars', function(req, res) {
  res.render('cars/index', {
    cars: cars
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})