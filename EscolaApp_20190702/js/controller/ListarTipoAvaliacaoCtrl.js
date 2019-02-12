var listarTipoAvaliacaoCtrl = function($scope, $mdToast, tipoAvaliacaoApi) {
    
    $scope.tipos = [];
    
    $scope.listarTiposAvaliacao = function(nome) {
        
      tipoAvaliacaoApi.getTiposAvaliacaoPorNome(nome)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('Os Tipos de Avaliação foram listados abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
          
                $scope.tipos = response.data;
            })
        
            .catch(function (error) {  
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados dos Tipos de Avaliação.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
  
                console.error(error);
            });
    }
};

escolaApp.controller("ListarTipoAvaliacaoCtrl", listarTipoAvaliacaoCtrl);