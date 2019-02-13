// Controller - Pesquisar Escola pelo código.
var pesquisarEscolaPorCodigoCtrl = function ($scope, $stateParams, $mdToast, escolaApi) {

    $scope.escola = {};
    $scope.codEscola = $stateParams.codEscola;

    let pesquisarEscola = function (codEscola) {
        escolaApi.getEscola(codEscola)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('A escola foi listada abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);    
            
                $scope.escola = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados das escolas.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
            
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