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
        .state('tiposAvaliacaoPorNome', {
            url: '/tiposAvaliacaoPorNome',
            templateUrl: 'listarTiposAvaliacaoPorNome.html',
            controller: 'ListarTiposAvaliacaoPorNomeCtrl'
        })
    
        .state('listarMediaEscola', {
            url: '/listarmediaescola',
            templateUrl:'listarMediaEscola.html',
            controller: 'MediaEscolaCtrl'
        })
    
        .state('avaliacaoEscola', {
            url: '/avaliacaoEscola/:codEscola',
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
            controller: 'PesquisarEscolasPorNomeCtrl'
        })  
    
        .state('avaliacoesPorAnoTipo', {
            url: '/avaliacoesPorAnoTipo',
            templateUrl: 'listarAvaliacoesPorAnoTipo.html',
            controller: 'ListarAvaliacoesPorAnoTipoCtrl'
        }) 
    
        .state('tiposAvaliacoes', {
            url: '/tiposAvaliacoes',
            templateUrl: 'tiposAvaliacoes.html',
            controller: 'TiposAvaliacoesCtrl'
        }) 
    
        .state('listarMediaPorAno', {
            url: '/listarMediaPorAno',
            templateUrl:'listarMediaPorAno.html',
            controller: 'ListarMediaPorAnoCtrl'
        })
;    
    
});
