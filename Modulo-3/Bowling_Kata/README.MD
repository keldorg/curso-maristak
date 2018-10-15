The game consists of 10 frames as shown above.  In each frame the player has
two opportunities to knock down 10 pins.  The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries.  The bonus for
that frame is the number of pins knocked down by the next roll.  So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try.  The bonus
for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame.  However no more than three balls can be rolled in
tenth frame.


The Requirements

Write a class named “Game” that has two methods
roll(pins : int) is called each time the player rolls a ball.  The argument is the number of pins knocked down.
score() : int is called only at the very end of the game.  It returns the total score for that game.


Reglas de Juego

Posición de los bolos.
Por cada bolo derribado se sumará un punto al marcador del jugador siempre y cuando no se den las siguientes circunstancias:

Haber derribado todos los bolos en el primer lanzamiento de un juego. A esta jugada se le suele llamar strike (pleno, moñona' o chuza) y se representa en el marcador con una X. En este caso el jugador no podrá utilizar su segundo lanzamiento del juego. Se sumarán diez puntos, más los puntos totales que se consigan en los dos siguientes lanzamientos de bola.
Haber derribado todos los bolos utilizando los dos lanzamientos del juego. A esta jugada se llama spare, medio strike, semipleno, media chuza o simplemente media. Se representa en el marcador con una /. En este caso se sumarán diez puntos más los que se consigan en el siguiente lanzamiento de bola.
La máxima puntuación posible son 300 puntos, y para conseguirla es necesario lograr 12 strikes consecutivos (de la tirada 1 a la 10 y sus dos adicionales correspondientes).