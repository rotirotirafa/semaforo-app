var app = angular.module('app', []);

app.controller('Semaforo', ['$scope', function($scope) {
  // Cada farol verde deve durar 15 segundos
  // Cada farol amarelo deve durar 3 segundos
  // Cada farol vermelho deve durar 10 segundos
  $scope.tempoVermelho = 10000;
  $scope.tempoAmarelo = 3000;
  $scope.tempoVerde = 15000;

  $scope.tempoSemaforo1 = 28000;
  $scope.tempoSemaforo2 = 28000;
  // Os valores devem ser enviados em milisegundos

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
  //calcular o tempo total que os semaforos vão ficar ativos,
  //usar setInteverval para determinar e dentro dele usar o setTimeout pois as luzes vao acender apenas uma vez durante o intervalo.

   //setTimeout(function, tempo) //a funcao setTimout roda apenas uma vez
     //setInterval(function, tempo) //a funcao setTimout roda sempre
      //clearInterval(function) // para pausar a função
      //clearTImeout(function) // para pausar a função
   setInterval(semaforo1, $scope.tempoSemaforo1);

   function semaforo1(){
     setTimeout(vermelho, $scope.tempoVermelho);
   }
   
   function vermelho(){
      $scope.semaforo1.vermelho = true;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = false;
      console.log('Agora é Vermelho',$scope.semaforo1)
      setTimeout(amarelo, $scope.tempoAmarelo);
   }
   function amarelo(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = true;
      $scope.semaforo1.verde = false;
      console.log('Agora é Amarelo',$scope.semaforo1)
      setTimeout(verde, $scope.tempoVerde);
   }
   function verde(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = true
      console.log('Agora é Verde',$scope.semaforo1)
   }
   
   console.log('Semaforo 1', $scope.semaforo1);
   console.log('Semaforo 2', $scope.semaforo2);
}]);
