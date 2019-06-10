var app = angular.module('app', []);

app.controller('Semaforo', ['$scope', function($scope) {

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

  // Cada farol verde deve durar 15 segundos
  // Cada farol amarelo deve durar 3 segundos
  // Cada farol vermelho deve durar 10 segundos

   //setTimeout(function, tempo) //a funcao setTimout roda apenas uma vez
     //setInterval(function, tempo) //a funcao setTimout roda sempre
   setInterval(farol, 5000)
   /***   
      Se SEMAFORO1.VERMELHO === TRUE
          SEMAFORO2.VERDE = TRUE
          SEMAFORO2.AMARELO = FALSE
          SEMAFORO2.VERMELHO = FALSE

          SEMAFORO1.AMARELO = FALSE
          SEMAFORO1.VERDE = FALSE
          SEMAFORO1.VERMELHO = FALSE

          SEMAFORO2.TEMPO = 15

      semaforo2.verde....
      DEPOIS QUE ACABAR OS 15 SEGUNDOS:
          SEMAFORO2.AMARELO = TRUE
          SEMAFORO2.VERDE = FALSE
          SEMAFORO2.VERMELHO = FALSE

          SEMAFORO1.VERDE = FALSE
          SEMAFORO1.AMARELO = FALSE
          SEMAFORO1.VERMELHO = TRUE
      
      semaforo2.amarelo...
      DEPOIS QUE ACABAR 3 SEGUNDOS:
          SEMAFORO2.AMARELO = FALSE
          SEMAFORO2.VERMELHO = FALSE
          SEMAFORO2.VERDE = FALSE
          
          SEMAFORO1.VERDE = TRUE
          SEMAFORO1.AMARELO = FALSE
          SEMAFORO1.VERMELHO = FALSE
   ***/
   function farol() {
     $scope.semaforo1.vermelho = true
     if ($scope.semaforo1.vermelho === true) {
       $scope.semaforo2.verde = true;
     }
     console.log($scope.semaforo1, $scope.semaforo2);
   }
   console.log('Semaforo 1', $scope.semaforo1);
   console.log('Semaforo 2', $scope.semaforo2);
}]);
