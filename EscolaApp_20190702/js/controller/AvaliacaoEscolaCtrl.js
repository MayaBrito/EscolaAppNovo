var avaliacaoEscolaCtrl = function($scope, escolaApi) {
    $scope.avaliacoes = [];
    $scope.escolaAvaliacoes = function(codEscola) {
      escolaApi.getEscolaAvaliacoes(codEscola)
            .then(function (response) {
                $scope.avaliacoes = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("AvaliacaoEscolaCtrl", avaliacaoEscolaCtrl);