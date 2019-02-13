var avaliacaoAnoEscolaCtrl = function($scope, $mdToast, escolaApi) {
    $scope.avaliacoesAno = [];
    $scope.escolaAvaliacoesAno = function(codEscola, ano) {
      escolaApi.getEscolaAvaliacoesAno(codEscola, ano)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As Avaliaçoes foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
                
                $scope.avaliacoesAno = response.data;
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
};

escolaApp.controller("AvaliacaoAnoEscolaCtrl", avaliacaoAnoEscolaCtrl);