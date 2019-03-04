
app.config(function ($stateProvider) {

	$stateProvider
		.state(
			'home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'
			})
		.state(
			'listeS1', {
				url: '/listeS1',
				templateUrl: 'templates/listeS1.html',
				controller: 'ListeS1Ctrl'
			})
		.state(
			'listeS3', {
				url: '/listeS3',
				templateUrl: 'templates/listeS3.html',
				controller: 'ListeS3Ctrl'
			});
});


