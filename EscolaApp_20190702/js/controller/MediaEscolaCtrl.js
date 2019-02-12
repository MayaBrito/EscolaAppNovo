var mediaEscolaCtrl = function($scope, escolaApi) {

    $scope.media = 0;

    $scope.pesquisarMediaEscola = function(codEscola) {
      escolaApi.getMediaEscola(codEscola)
            .then(function (response) {
                $scope.media = response.data.media;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("MediaEscolaCtrl", mediaEscolaCtrl);