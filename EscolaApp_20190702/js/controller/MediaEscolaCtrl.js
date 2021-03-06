var mediaEscolaCtrl = function($scope, $mdToast, escolaApi) {

    $scope.media = 0;

    $scope.pesquisarMediaEscola = function(codEscola) {
      escolaApi.getMediaEscola(codEscola)
            .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('As médias da escola foram listadas abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);
          
                $scope.media = response.data.media;
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

escolaApp.controller("MediaEscolaCtrl", mediaEscolaCtrl);