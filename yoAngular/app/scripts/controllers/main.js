'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myChiliApp')
  .controller('MainCtrl', function ($scope, $interval) {
    // all of our logic here
    //global vars



    //scope vars
    //default # of servings 
    $scope.servings = 4;
    // bg ingredient images
		$scope.ingredientImages = ['tomatoes', 'garlic', 'jalapeno','salt', 'pepper', 'buffalo', 'cayenne', 'broth', 'onion', 'pinto-beans', 'black-beans', 'great-northern-beans', 'kidney-beans'];

	// directions
		$scope.directions = [
			{
				isCompleted: false,
				step: 'Get your filthiest campfire-scorched Dutch oven over the fire the best you can situate it.',
				images: ['pot']
			},
			{
				isCompleted: false,
				step: 'Brown the bison.',
				images: ['buffalo']
			},
			{
				isCompleted: false,
				step: 'Add the diced onion and spices, sautee until soft.',
				images: ['onion', 'jalapeno', 'garlic', 'salt', 'pepper', 'cayenne']
			},
			{
				isCompleted: false,
				step: 'Add tomatoes and broth and bring to a simmer for 40 minutes.',
				images: ['tomatoes', 'broth']
			},
			{
				isCompleted: false,
				step: 'Add beans and cook another 30 minutes.',
				images: ['pinto-beans', 'black-beans', 'great-northern-beans', 'kidney-beans']
			},
			{
				isCompleted: false,
				step: 'Serve with Tabasco and a giant spoon.',
				images: ['done']
			}
		];

	    // ingredients
	    $scope.ingredients = [
			{
				base: 0.25,
				unit: 'lb',
				name: 'ground bison',
				checked: false
			},
			{
				base: 0.25,
				unit: 'cup',
				name: 'diced onion',
				checked: false
			},
			{
				base: 1,
				unit: '',
				name: 'diced jalepeños',
				checked: false
			},
			{
				base: 0.25,
				unit: 'cup',
				name: 'black beans',
				checked: false
			},
			{
				base: 0.25,
				unit: 'cup',
				name: 'great northern beans',
				checked: false
			},
			{
				base: 0.25,
				unit: 'cup',
				name: 'kidney beans',
				checked: false
			},
			{
				base: 1,
				unit: 'cloves',
				name: 'garlic',
				checked: false
			},
			{
				base: 0.5,
				unit: 'tbsp',
				name: 'mexican chili powder',
				checked: false
			},
			{
				base: 0.5,
				unit: 'tsp',
				name: 'salt',
				checked: false
			},
			{
				base: 0.5,
				unit: 'tsp',
				name: 'ground pepper',
				checked: false
			},
			{
				base: 0.25,
				unit: 'cup',
				name: 'cayenne',
				checked: false
			},
			{
				base: 7,
				unit: 'oz',
				name: 'crushed tomatoes',
				checked: false
			},
			{
				base: 0.75,
				unit: 'cups',
				name: 'beef broth',
				checked: false
			}
		];

    //set active ingredient to start at 0 
    $scope.activeIngredient = 0;
		

    //template functions
		$scope.isActiveIngredient = function (ingredient) {
			return ingredient === $scope.ingredientImages[$scope.activeIngredient];
		};

    //slideshow, uses angular setInterval 
		$interval(function() {
			// % modulus, keep it from going over the length of the images
			$scope.activeIngredient = ($scope.activeIngredient + 1) % $scope.ingredientImages.length;
		}, 1600);

    //helper functions


    //observers 

  });
