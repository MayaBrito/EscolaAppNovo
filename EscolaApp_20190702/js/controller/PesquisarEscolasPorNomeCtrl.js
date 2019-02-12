var pesquisarEscolasPorNomeCtrl = function($scope, $mdToast, escolaApi) {
    
    $scope.escolas = [];
    
    $scope.listarEscolas = function(nome) {
        
      escolaApi.getEscolasPorNome(nome)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As Escolas foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
          
                $scope.escolas = response.data;
            })
        
            .catch(function (error) {  
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados da Escola.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
  
                console.error(error);
            });
    }
};

escolaApp.controller("PesquisarEscolasPorNomeCtrl", pesquisarEscolasPorNomeCtrl);