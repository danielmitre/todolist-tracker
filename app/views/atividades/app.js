angular.module("todolist-tracker", [])
    .controller('todolist', function($scope, $http) {
        $scope.appName = "TO-DO list online tracker!";
        $scope.atividadesList = [];
        $scope.estadosPossiveis = ["TODO", "DOING", "DONE"];

        function atividadesListRefresh() {
            $http.get('https://selecao-smartrocket.herokuapp.com/atividades/').then(function(response) {
               $scope.atividadesList = response.data;
               $("#adividadeNewNome").addClass("ng-untouched ng-pristine");
               $("#adividadeNewDescricao").addClass("ng-untouched ng-pristine");
               $("#atividadeNewEstado").addClass("ng-untouched ng-pristine");

               $("#adividadeNewNome").removeClass("ng-touched ng-dirty");
               $("#adividadeNewDescricao").removeClass("ng-touched ng-dirty");
               $("#atividadeNewEstado").removeClass("ng-touched ng-dirty");
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

        $scope.atividadeRemove = function(id) {
            $http.delete('https://selecao-smartrocket.herokuapp.com/atividades/' + id).then(function(response) {
                atividadesListRefresh();
            }, function(response) {
                alert('Erro enquanto removia');
                console.log(response);
            });
        };


        $scope.updateModal = function(atividade) {
            $scope.currAtividadeNome = atividade.nome;
            $scope.currentEditing = JSON.parse(JSON.stringify(atividade));
        }

        $scope.atividadeUpdate = function(newData) {
            $http.put('https://selecao-smartrocket.herokuapp.com/atividades/' + newData.id, newData).then(function(response) {
                atividadesListRefresh();
            }, function(response) {
                alert('Erro enquanto atualizava');
                console.log(response);
            });
        };
    }
);
