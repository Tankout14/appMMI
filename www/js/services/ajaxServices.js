
// Injection des service $http (Ajax), $q (promesses)
app.service('ajaxService', function ($http, $q) {

    this.getListeS1 = function () {

        // Création d'une promesse
        var deferred = $q.defer();
        // Requette Ajax
        $http.get("../assets/JuryS1.json")
            .then(
                function (response) {
                    deferred.resolve(response.data.dataJSON);
                },
                function (error) {
                    deferred.reject("erreur Ajax 1");
                }
            );
        // Réponse de la promise
        return deferred.promise;
    }

    this.getListeS3 = function () {

        // Création d'une promesse
        var deferred = $q.defer();
        // Requette Ajax
        $http.get("../assets/JuryS3.json")
            .then(
                function (response) {
                    deferred.resolve(response.data.dataJSON);
                },
                function (error) {
                    deferred.reject("erreur Ajax 1");
                }
            );
        // Réponse de la promise
        return deferred.promise;
    }
})
