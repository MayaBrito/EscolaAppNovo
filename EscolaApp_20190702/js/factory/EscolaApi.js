// Factory - API
var escolaApi = function ($http) {

    var _getEscolas = function (quantidadeDeItens) {
        return $http.get(baseUrl + "/rest/escolas?quantidadeDeItens=" +
            quantidadeDeItens);
    };

    var _getEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };
    
    var _getMediaEscola = function (codEscola) {
      return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getEscolaAvaliacoes = function (codEscola){
      return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };
    
    var _getEscolaAvaliacoesAno = function (codEscola, ano) {
      return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };
    
    var _getEscolasPorNome = function (nome) {
        return $http.get(baseUrl + "/rest/escolas?nome=" + nome);
    };
    
    var _getListarAvaliacoesPorAnoTipo = function (codEscola, ano, tipo) {
      return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    };
    
    var _getListarMediaPorAno = function (codEscola, ano) {
      return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };

    return {
        getEscolas: _getEscolas,
        getEscola: _getEscola,
        getMediaEscola: _getMediaEscola,
        getEscolaAvaliacoes: _getEscolaAvaliacoes,
        getEscolaAvaliacoesAno: _getEscolaAvaliacoesAno,
        getEscolasPorNome: _getEscolasPorNome,
        getListarAvaliacoesPorAnoTipo: _getListarAvaliacoesPorAnoTipo,
        getListarMediaPorAno: _getListarMediaPorAno
    };
}

escolaApp.factory("escolaApi", escolaApi);