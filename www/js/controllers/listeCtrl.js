// Contrôleur d'accueil
// Injection des dépendance pour videoService
app.controller('ListeS1Ctrl', function ($scope, ajaxService) {

	// Création d'une variable titre sur le scope
	$scope.titre = "Promo 2018-2020";

	// Appel de la liste des vidéos
	$scope.myData = [ajaxService.getListeS1()
		.then(
			// En cas de success
			function (response) {
				$scope.myData = response;
			},
			// En cas d'erreur
			function (error) {
				alert("erreur Ajax");
			}
		)];
	/*
$http.get("../assets/JuryS1.json")
	.then(function (response) {
		$scope.myData = response.data.dataJSON;
	});
	*/

});

app.controller('ListeS3Ctrl', function ($scope, ajaxService) {

	// Création d'une variable titre sur le scope
	$scope.titre = "Promo 2017-2019";

	// Appel de la liste des vidéos
	$scope.myData = [ajaxService.getListeS3()
		.then(
			// En cas de success
			function (response) {
				$scope.myData = response;
			},
			// En cas d'erreur
			function (error) {
				alert("erreur Ajax");
			}
		)];
	/*
$http.get("../assets/JuryS3.json")
	.then(function (response) {
		$scope.myData = response.data.dataJSON;
	});
	*/

});

// Injection de ajaxService pour requête Ajax
app.controller('RechercherCtrl', function ($scope, ajaxService) {
    // Liste des vidéos
    $scope.myData = "";
    // Pour click sur une vidéo
    $scope.clickedValueModel = "";
    // Pour suppression d'une vidéo sélectionnée
    $scope.removedValueModel = "";
    // Appel Ajax de la liste des vidéos
    ajaxService.getListeS1()
        .then(
            // En cas de success
            function (response) {
                $scope.myData = response;
            },
            // En cas d'erreur
            function (error) {
                alert("erreur Ajax");
            }
        );

    // Selection des vidéos
    $scope.getTestItems = function (query) {
        var items = [];
        if (query) {
            // Parcours de toutes les vidéos
            angular.forEach($scope.myData, function () {
                // On utilise des minuscule pour la recherche
                var Nom = MMI.Nom.toLowerCase();
                // Si la requête est trouvée dans le titre d'une vidéo
                if (Nom.indexOf(query) > -1) {
                    // Mise dans le tableau des résultats
                    items.push(MMI.Nom);
                }
            })
            // Renvoie du tableau des résultats
            return { items };
        };

        // Une ligne de vidéo a été cliquée
        $scope.itemsClicked = function (callback) {
            $scope.clickedValueModel = callback;
        };

        // click sur la corbeille d'une vidéo sélectionnée
        $scope.itemsRemoved = function (callback) {
            $scope.removedValueModel = callback;
        };
    }
});






