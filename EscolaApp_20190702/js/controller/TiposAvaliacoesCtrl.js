var tiposAvaliacoesCtrl = function($scope, tipoAvaliacaoApi) {
    $scope.tiposAvaliacao = [];
    $scope.listar = function() {
      tipoAvaliacaoApi.getTiposAvaliacao()
            .then(function (response) {
                $scope.tiposAvaliacao = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
};

escolaApp.controller("TiposAvaliacoesCtrl", tiposAvaliacoesCtrl);