var ListarAvaliacoesPorAnoTipoCtrl = function($scope, $mdToast, escolaApi) {
    $scope.avaliacaoPorAnoTipo = {};
    $scope.listarAvaliacoesPorAnoTipo = function(codEscola, ano, tipo) {
      escolaApi.getListarAvaliacoesPorAnoTipo(codEscola, ano, tipo)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As Avaliaçoes foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);    
          
                $scope.avaliacaoPorAnoTipo = response.data;
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
};

escolaApp.controller("ListarAvaliacoesPorAnoTipoCtrl", ListarAvaliacoesPorAnoTipoCtrl);