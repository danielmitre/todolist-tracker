angular.module("todolist-tracker", [])
    .controller('todolist', function($scope, $http) {
        $scope.appName = "TO-DO list online tracker!";
        $scope.atividadesList = [];
        $scope.estadosPossiveis = ["TODO", "DOING", "DONE"];

        function atividadesListRefresh() {
            $http.get('https://selecao-smartrocket.herokuapp.com/atividades/').then(function(response) {
               $scope.atividadesList = response.data;
           }, function(response) {
               alert('Erro enquanto atualiza a listagem');
               console.log(response);
           });
        }
        atividadesListRefresh();

        $scope.atividadeAdd = function() {
            $http.post('https://selecao-smartrocket.herokuapp.com/atividades/', {'nome': $scope.atividadeNewNome,
                                                            'descricao': $scope.atividadeNewDescricao,
                                                            'estado': $scope.atividadeNewEstado}
            ).then(function(response) {
                atividadesListRefresh();
                $scope.atividadeNewNome = '';
                $scope.atividadeNewDescricao = '';
                $scope.atividadeNewEstado = '';
            }, function(response) {
                alert('Erro enquanto adicionava');
                console.log(response);
            });
        };

        $scope.atividadeRemove = function(todoId) {
            $http.delete('https://selecao-smartrocket.herokuapp.com/atividades/' + todoId).then(function(response) {
                atividadesListRefresh();
            }, function(response) {
                alert('Erro enquanto removia');
                console.log(response);
            });
        };
    }
);
