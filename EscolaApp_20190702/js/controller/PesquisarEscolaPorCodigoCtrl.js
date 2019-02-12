// Controller - Pesquisar Escola pelo código.
var pesquisarEscolaPorCodigoCtrl = function ($scope, $stateParams, escolaApi) {

    $scope.escola = {};
    $scope.codEscola = $stateParams.codEscola;

    let pesquisarEscola = function (codEscola) {
        escolaApi.getEscola(codEscola)
            .then(function (response) {
                $scope.escola = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
     
     $scope.pesquisarEscola = pesquisarEscola;

    let inicializarEscola = function() {
        var codEscola = $stateParams.codEscola;
        pesquisarEscola(codEscola);
    }

    inicializarEscola();
};

escolaApp.controller("PesquisarEscolaPorCodigoCtrl", pesquisarEscolaPorCodigoCtrl);