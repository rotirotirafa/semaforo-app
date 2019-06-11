var app = angular.module('app', []);

app.controller('Semaforo', ['$scope', '$timeout', '$interval', function($scope, $timeout, $interval) {
  // Cada farol verde deve durar 15 segundos
  // Cada farol amarelo deve durar 3 segundos
  // Cada farol vermelho deve durar 10 segundos
  $scope.tempoVermelho = 10;
  $scope.tempoAmarelo = 5;
  $scope.tempoVerde = 15;

  $scope.tempoSemaforo1 = 28;
  $scope.tempoSemaforo2 = 28;
  // Os valores devem ser enviados em milisegundos, ou seja na hora de chamar a função deve ser feito como: 1000 * segundos

  $scope.semaforo1 = {
     tempoTotal: $scope.tempoSemaforo1,
     vermelho: false,
     amarelo: false, 
     verde: false
   }

   $scope.semaforo2 = {
     tempoTotal: $scope.tempoSemaforo2,  
     vermelho: false,
     amarelo: false, 
     verde: false
  }  

  function tempoRestante(){
     //receber tempo restante de cara farol
   $scope.countDown = 10;    
   $interval(function(){
      console.log($scope.countDown--)
   },1000,$scope.countDown);
  }
  tempoRestante()

  function ContarSegundos(){
    var segundos = 5;
    console.log("Já passou " + segundos +" segundos...");
    $scope.semaforo2.verde = true;
  }

  //setInterval(livre, 1000 * 10)
  function livre(){
     $scope.semaforo1.amarelo = true;
     $scope.semaforo2.amarelo = true;
     console.log($scope.semaforo1, $scope.semaforo2)
  }
  // setInterval(ContarSegundos, 1000 * $scope.tempoVermelho);

  //calcular o tempo total que os semaforos vão ficar ativos,
  //usar setInteverval para determinar e dentro dele usar o setTimeout pois as luzes vao acender apenas uma vez durante o intervalo.

   //setTimeout(function, tempo) //a funcao setTimout roda apenas uma vez
     //setInterval(function, tempo) //a funcao setTimout roda sempre
      //clearInterval(function) // para pausar a função
      //clearTImeout(function) // para pausar a função
  
   semaforo1();
   function semaforo1(){
     setInterval(vermelho, 1000 * $scope.tempoVermelho)
     setInterval(amarelo, 1000 * $scope.tempoAmarelo)
     setInterval(verde, 1000 * $scope.tempoVerde)
     console.log($scope.semaforo1);
   }
   
   function vermelho(){
      $scope.semaforo1.vermelho = true;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = false;
      $scope.$apply();
      console.log('Agora é Vermelho',$scope.semaforo1)
   }
   function amarelo(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = true;
      $scope.semaforo1.verde = false;
      $scope.$apply();
      console.log('Agora é Amarelo',$scope.semaforo1)
   }
   function verde(){
      $scope.semaforo1.vermelho = false;
      $scope.semaforo1.amarelo = false;
      $scope.semaforo1.verde = true;
      $scope.$apply();
      console.log('Agora é Verde',$scope.semaforo1)
   }
}]);
