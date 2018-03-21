angular.module("todolist-tracker", [])
    .controller('todolist', ['$http', function($http) {
        this.appName = "TO-DO list online tracker!";
        this.atividadesList = [];

        function atividadesListRefresh() {
            $http.get('https://selecao-smartrocket.herokuapp.com/atividades').then(function(response) {
               self.atividadesList = response.data;
           }, function(response) {
               alert('Erro enquanto atualiza a listagem');
               console.log(response);
           });
        }
        atividadesListRefresh();

        this.atividadeAdd = function() {
            $http.post('https://selecao-smartrocket.herokuapp.com/atividades', {'nome': this.atividadeNewNome,
                                                            'descricao': this.atividadeNewDescricao,
                                                            'estado': this.atividadeNewEstado}
            ).then(function(response) {
                atividadesListRefresh();
                this.atividadeNewNome = '';
                this.atividadeNewDescricao = '';
                this.atividadeNewEstado = '';
            }, function(response) {
                alert('Erro enquanto adicionava');
                console.log(response);
            });
        };

        this.atividadeRemove = function(todoId) {
            $http.delete('https://selecao-smartrocket.herokuapp.com/atividades' + todoId).then(function(response) {
                peopleListRefresh();
            }, function(response) {
                alert('Erro enquanto removia');
                console.log(response);
            });
        };
    }]
);
