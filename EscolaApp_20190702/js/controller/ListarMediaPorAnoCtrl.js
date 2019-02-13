var ListarMediaPorAnoCtrl = function($scope, $mdToast, escolaApi) {

    $scope.media = 0;

    $scope.listarMediaPorAno = function(codEscola, ano) {
      escolaApi.getListarMediaPorAno(codEscola, ano)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('A média do ano foi listada abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
            
                $scope.media = response.data.media;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação da média das escolas.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
          
                console.error(error);
            });
    }
};

escolaApp.controller("ListarMediaPorAnoCtrl", ListarMediaPorAnoCtrl);