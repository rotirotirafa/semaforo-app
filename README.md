``` yarn install ```


```  
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
```
