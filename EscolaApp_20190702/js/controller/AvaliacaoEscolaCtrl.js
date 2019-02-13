var avaliacaoEscolaCtrl = function ($scope, escolaApi, $mdToast, $stateParams) {

    $scope.avaliacoes = [];
    $scope.codEscola = $stateParams.codEscola;

    let escolaAvaliacoes = function (codEscola) {

        escolaApi.getEscola(codEscola)
            .then(function (response) {
                let escola = response.data;
                $scope.escola = escola;
            })
            .catch(function (error) {
                console.error(error);
            });

        escolaApi.getEscolaAvaliacoes(codEscola)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As Avaliaçoes foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoes = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados da escola.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
            });
    }

    $scope.escolaAvaliacoes = escolaAvaliacoes;

    let inicializarAvaliacao = function () {
        var codEscola = $stateParams.codEscola;
        escolaAvaliacoes(codEscola);
    }

    inicializarAvaliacao();

};

escolaApp.controller("AvaliacaoEscolaCtrl", avaliacaoEscolaCtrl);