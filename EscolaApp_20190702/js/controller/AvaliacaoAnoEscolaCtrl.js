var avaliacaoAnoEscolaCtrl = function($scope, escolaApi) {
    $scope.avaliacoesAno = [];
    $scope.escolaAvaliacoesAno = function(codEscola, ano) {
      escolaApi.getEscolaAvaliacoesAno(codEscola, ano)
            .then(function (response) {
                $scope.avaliacoesAno = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("AvaliacaoAnoEscolaCtrl", avaliacaoAnoEscolaCtrl);