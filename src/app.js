var app = angular.module('app', []);

app.controller('Semaforo', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {
  // Cada farol verde deve durar 15 segundos
  // Cada farol amarelo deve durar 3 segundos
  // Cada farol vermelho deve durar 10 segundos
  $scope.tempoVermelho = 10;
  $scope.tempoAmarelo = 3;
  $scope.tempoVerde = 15;

  $scope.tempoSemaforo1 = 28;
  $scope.tempoSemaforo2 = 28;
  // Os valores devem ser enviados em milisegundos, ou seja na hora de chamar a função deve ser feito como: 1000 * segundos

  $scope.semaforo1 = {
     vermelho: false,
     amarelo: false, 
     verde: false
   }

   $scope.semaforo2 = {
    vermelho: false,
    amarelo: false, 
    verde: false
  }

  function ContarSegundos(){
    var segundos = 5;
    console.log("Já passou " + segundos +" segundos...");
    $scope.semaforo2.verde = true;
  }

  // setInterval(ContarSegundos, 1000 * $scope.tempoVermelho);

  //calcular o tempo total que os semaforos vão ficar ativos,
  //usar setInteverval para determinar e dentro dele usar o setTimeout pois as luzes vao acender apenas uma vez durante o intervalo.

   //setTimeout(function, tempo) //a funcao setTimout roda apenas uma vez
     //setInterval(function, tempo) //a funcao setTimout roda sempre
      //clearInterval(function) // para pausar a função
      //clearTImeout(function) // para pausar a função
  

   function semaforo1(){
     setTimeout(vermelho, 1000 * $scope.tempoVermelho)
     setTimeout(amarelo, 1000 * $scope.tempoAmarelo)
     setTimeout(verde, 1000 * $scope.tempoVerde)
   }
   
   function vermelho(){
      $scope.semaforo1.vermelho = true;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = false;
      console.log('Agora é Vermelho',$scope.semaforo1)
   }
   function amarelo(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = true;
      $scope.semaforo1.verde = false;
      console.log('Agora é Amarelo',$scope.semaforo1)
   }
   function verde(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = true
      console.log('Agora é Verde',$scope.semaforo1)
   }
}]);
