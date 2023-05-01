const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

		
	router.route('/')
		.get(moviesController.list_movies)
		.post(moviesController.create_movie);

	router.route('/:id')
		.get(moviesController.read_movie)
		.put(moviesController.update_movie)
		.delete(moviesController.delete_movie);

module.exports = router;