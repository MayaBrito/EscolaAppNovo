var TiposAvaliacoesCtrl = function($scope, $mdToast, tipoAvaliacaoApi) {
    $scope.tiposAvaliacao = [];
    $scope.listar = function() {
      tipoAvaliacaoApi.getTiposAvaliacao()
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('Os tipos de avaliações foram listados abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
          
                $scope.tiposAvaliacao = response.data;
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

escolaApp.controller("TiposAvaliacoesCtrl", TiposAvaliacoesCtrl);