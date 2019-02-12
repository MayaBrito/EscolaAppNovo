// Navegação.
escolaApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('escolas', {
            url: '/escolas',
            templateUrl: 'listarEscolas.html',
            controller: 'ListarEscolasCtrl'
        })
        .state('escolaPorCodigo', {
            url: '/escolas/:codEscola',
            templateUrl: 'pesquisarEscolaPorCodigo.html',
            controller: 'PesquisarEscolaPorCodigoCtrl'
        })
        .state('tiposAvaliacao', {
            url: '/tiposavaliacao',
            templateUrl: 'listarTiposAvaliacao.html',
            controller: 'ListarTiposAvaliacaoCtrl'
        })
    
        .state('listarMediaEscola', {
            url: '/listarmediaescola',
            templateUrl:'listarMediaEscola.html',
            controller: 'MediaEscolaCtrl'
        })
    
        .state('avaliacaoEscola', {
            url: '/avaliacaoEscola',
            templateUrl:'listarAvaliacoes.html',
            controller: 'AvaliacaoEscolaCtrl'
        })
    
        .state('avaliacaoAnoEscola', {
            url: '/avaliacaoAnoEscola',
            templateUrl: 'listarAvaliacaoPorAno.html',
            controller: 'AvaliacaoAnoEscolaCtrl'
        })
    
        .state('escolaPorNome', {
            url: '/escolaPorNome',
            templateUrl: 'pesquisarEscolasPorNome.html',
            controller: 'pesquisarEscolasPorNomeCtrl'
        })   
;    
    
});
