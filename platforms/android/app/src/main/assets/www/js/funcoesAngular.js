var appModule = angular.module('appAg',[]);

appModule.controller('appAgController', function($scope){
    
    
    $scope.resultado = 0;
    $scope.opcao = "";

    $scope.calcular = function(calculo){
        // $(document).ready(function(){
        //     $('.tabs').tabs();
        // });
        $(document).ready(function(){
            $('ul.tabs').tabs();
        });
        $scope.resultado = $scope.calculo.alcool / $scope.calculo.gasolina;

        if($scope.resultado < 0.7){
            //alert($scope.resultado);
            $scope.opcao = "De acordo com os cálculos, escolha o Álcool.";
        }else{
            $scope.opcao = "De acordo com os cálculos, escolha a Gasolina.";
        }
        
        $scope.exibeResultados = true;

        //funcao para trocar a aba no final do método
        
        $scope.trocarAba("#btnCalcular","#resultado");
    };

    /*função para voltar para a aba calculo*/
    $scope.voltar = function(){
        $scope.limpar();
        $(document).ready(function(){
            $('.tabs').tabs();
        });
        $scope.trocarAba("#btnVoltar","#calculo",);
    };

    $scope.limpar = function(){
        $('#idAlcool').val('');
        $('#idGasolina').val('');
    }

    /*função para ir para trocar aba*/
    $scope.trocarAba = function(btnValor, tabValor) {
        $(btnValor).click(function() {
            $('ul.tabs').tabs('select', tabValor);
        });
    };

    $scope.esconderResultados = function(){
        $scope.exibeResultados = false;
    }
    
    $scope.exibirModal = function(){
        $('.acao-contas').click(function(){
            $('.modal').modal();
        })
            
    };
     
});

//inicializacao do plugin jQuery
// $(document).ready(function(){
//     $('ul.tabs').tabs();
// });


