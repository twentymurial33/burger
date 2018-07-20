var express = require('express');
var router = express.Router();
var importModels = require('../models/burger.js')['exportModels'];

	// router.get('/', function(req,res){
	// 	allBurgers(function(data){
	// 			res.render('index', {burgers: data});
	// 		})
	// 	});

	router.post('/', function(req,res){
		allBurgers(req.body.burger_name, function(data){
			res.render('/');
		});
	});

	router.post('/create', function(req,res){
		createBurgers(req.body.burger_name, function(data){
			res.redirect('/');
		});
	});

	router.put('/update', function(req,res){
		updateBurgers(req.body.id, function(data){
			res.redirect('/');
		});
	}); 

module.exports['exportRouter'] = router;