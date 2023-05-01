const movieModel = require("../models/moviesModel.js");

exports.list_movies = async (req, res)=> {
	try{
		res.json(await movieModel.find({}));
	}catch (e){
		res.json(e);
	}
};

exports.read_movie = async (req, res)=> {
	/*
	TODO cast req.params.id to ObjectId
	*/
	try{

		res.json(await movieModel.findById(req.params.id));
	}catch (e) {
		res.json(e);
	}
};

exports.create_movie = async (req, res)=> {
	const Movie = new movieModel(req.body);
	try{
		res.json(await Movie.save());
	}catch (e) {
		res.json(e);
	}
};

exports.update_movie = async (req, res)=> {
	try{
		res.json(await movieModel.findByIdAndUpdate(req.params.id,req.body,{new: true}));
	}catch (e) {
		res.json(e);
	}
};

exports.delete_movie = async (req, res)=> {
	try{
		res.json(await movieModel.findByIdAndDelete(req.params.id));
	}catch (e) {
		res.json(e);
	}
};
