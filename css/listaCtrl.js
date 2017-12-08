angular.module("listaEstatistica").controller("listaEstatisticaCtrl", function ($scope) {
$scope.totalGeral = 239;$scope.documentoDAS = {nome:'DAS - Documento de Arquitetura',total:'127', percentual:'53'};
$scope.documentoCD = {nome:'CD - Caso de Desenvolvimento',total:'81', percentual:'33'};$scope.dtAtualizacao = '18-10-2017';$scope.listaDAS = [{sistema:'SISTEMA00',dtAtualizacaoDAS:'',dtAtualizacaoCD:'',statusDAS:false,statusCD:false},
{sistema:'SISTEMA01',dtAtualizacaoDAS:'',dtAtualizacaoCD:'',statusDAS:false,statusCD:false},
{sistema:'SISTEMA02',dtAtualizacaoDAS:'27/05/2016',dtAtualizacaoCD:'07/07/201',statusDAS:true,statusCD:true},
{sistema:'SISTEMA03',dtAtualizacaoDAS:'',dtAtualizacaoCD:'',statusDAS:false,statusCD:false},
{sistema:'SISTEMA04',dtAtualizacaoDAS:'25/10/2016',dtAtualizacaoCD:'20/01/2015',statusDAS:true,statusCD:true},
{sistema:'SISTEMA05',dtAtualizacaoDAS:'18/02/2009',dtAtualizacaoCD:'',statusDAS:true,statusCD:false},
{sistema:'SISTEMA06',dtAtualizacaoDAS:'09/11/2016',dtAtualizacaoCD:'14/07/2010',statusDAS:true,statusCD:true},
{sistema:'SISTEMA07',dtAtualizacaoDAS:'23/03/2011',dtAtualizacaoCD:'19/10/2010',statusDAS:true,statusCD:true},
{sistema:'SISTEMA08',dtAtualizacaoDAS:'02/12/2016',dtAtualizacaoCD:'',statusDAS:true,statusCD:false},
{sistema:'SISTEMA09',dtAtualizacaoDAS:'',dtAtualizacaoCD:'',statusDAS:false,statusCD:false},
{sistema:'SISTEMA10',dtAtualizacaoDAS:'21/02/2011',dtAtualizacaoCD:'',statusDAS:true,statusCD:false},
{sistema:'SISTEMA11',dtAtualizacaoDAS:'01/12/2016',dtAtualizacaoCD:'21/07/2016',statusDAS:true,statusCD:true}];
$scope.ordenarPor = function (campo) {
$scope.criterioDeOrdenacao = campo;
$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;};});