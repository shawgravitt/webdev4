console.log('\'Allo \'Allo!');

var customerApp = angular.module('customerApp', []);

customerApp.controller('artistController', ['$scope', function($scope){

	$scope.streetArtists = [
		{
			name: 'Blu',
			country: 'Italy',
			imgUrl: 'http://blublu.org/sito/walls/2007/big/035.jpg'
		},
		{
			name: 'Os Gemeos',
			country: 'Brazil',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/dliubfvi03utiacxicuv.jpg'
		},
		{
			name: 'JR',
			country: 'France',
			imgUrl: 'http://www.jr-art.net/sites/default/files/styles/large/public/photos/the_wrinkles_of_the_city_los_angeles_carl_in_silverlake_horizontal_usa_2011.jpg'
		},
		{
			name: 'ROA',
			country: 'Belgium',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/nkjxqnwpshlib1ro02li.jpg'
		},
		{
			name: 'Banksy',
			country: 'UK',
			imgUrl: 'http://banksy.co.uk/img/outdoorimg/igcaiwbi.jpg'
		},
		{
			name: 'Escif',
			country: 'Spain',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/zx0dkbgve8og5xffwnm9.jpg'
		},
		{
			name: 'Sam3',
			country: 'Spain',
			imgUrl: 'http://sam3.es/content/painting/8.2013/46.Cartagena-Spain.jpg'
		},
		{
			name: 'Vhils',
			country: 'Portugal',
			imgUrl: 'http://www.alexandrefarto.com/content/work/IMG_9257-1050x7001386262245.jpg'
		},
		{
			name: 'Interesni Kazki',
			country: 'Ukraine',
			imgUrl: 'http://arrestedmotion.com/wp-content/uploads/2013/04/AEC1.jpg'
		},
		{
			name: 'Boxi',
			country: 'UK/Germany',
			imgUrl: 'http://blogmodart.rebelmobile.de/blog/miamiblog/1.BOXI_THE-EMBRACE_MIA08.jpg'
		},
		{
			name: 'Evol',
			country: 'Germany',
			imgUrl: 'http://payload.cargocollective.com/1/0/633/106148/Evol_buildings_artotale_2_1000.jpg'
		},
		{
			name: 'Ericailcane',
			country: 'Italy',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/mhilk8i6xkkiu6hxe3qr.jpg'
		},
		{
			name: 'Claudio Ethos',
			country: 'Brazil',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/zzirvf2qswpszpzpdnbn.jpg'
		},
		{
			name: 'Aakash Nihalani',
			country: 'US',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/hu6kxllbbfphlsij58le.jpg'
		},
		{
			name: 'Space Invader',
			country: 'France',
			imgUrl: 'http://images.complex.com/complex/image/upload/t_article_image/ptvy6bqjp2irnfucqvuj.jpg'
		}

	];

	$scope.artistCountry = '';
	$scope.artistName = '';
	$scope.date = new Date();

	$scope.artistClick = function( name, country) {
		console.log('click');
		$scope.artistName = name;
		$scope.artistCountry = country;
		
	};
}]);
