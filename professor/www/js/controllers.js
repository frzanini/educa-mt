angular.module('app.controllers', [])

.controller('disciplinasCtrl', ['$scope', '$state', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams) {

  var idEscola = $stateParams.escola; //getting barVal
  // console.log($stateParams);
  console.log(idEscola);

  var vm = $scope;

  vm.disciplinas = [
    {id: 1, turma: '8 Série', horario:'7:30', periodo: 'Matutino', descricao: 'Matemática'},
    {id: 2, turma: '6 Série', horario:'8:30', periodo: 'Matutino', descricao: 'Matemática'},
    {id: 3, turma: '5 Série', horario:'14:00', periodo: 'Vespertino', descricao: 'Matemática'},
    {id: 4, turma: '8 Série', horario:'16:00', periodo: 'Vespertino', descricao: 'Física'},
  ];



}])

.controller('educaMTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('escolasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  var vm = $scope;

  vm.escolas = [{nome: 'Ubaldo Monteiro', id: 1},
                {nome: 'Adalgisa de Barros', id: 2},
                {nome: 'Milton Figueiredo', id: 3}];


}])

.controller('alunosCtrl', ['$scope', '$state', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams) {

  console.log($stateParams);

}])
