# Ta-Te-Ti

Este es un proyecto de Ta-Te-Ti desarrollado con React y Vue.js. El juego permite a dos jugadores turnarse para marcar X o O en una cuadrícula de 3x3 y determinar el ganador. También guarda el estado del juego y el historial de victorias en el almacenamiento local del navegador.

## Características

- Juego de Ta-Te-Ti interactivo.
- Guarda el estado del juego y el turno actual en el almacenamiento local.
- Guarda el historial de victorias en el almacenamiento local.
- Incluye un botón para resetear el juego.
- Incluye un botón para resetear el historial de victorias.
- Animación de confeti al ganar.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/GonzaBolognese/tateti.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd tateti
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Ejecuta la aplicación:

    ```bash
    npm start
    ```

## Uso

- Haz clic en una casilla para marcar tu turno.
- El juego alternará automáticamente entre los jugadores X y O.
- Cuando un jugador gana, se mostrará una animación de confeti y el historial de victorias se actualizará.
- Haz clic en "Resetear el juego" para reiniciar el tablero.
- Haz clic en "Resetear marcador" para reiniciar el historial de victorias.

## Estructura del Proyecto

- `App.js`: Componente principal que maneja el estado del juego y la lógica.
- `Square.js`: Componente que representa una casilla del tablero.
- `Winner.js`: Componente que muestra el ganador del juego.
- `constants.js`: Archivo que contiene las constantes del juego.
- `board.js`: Archivo que contiene la lógica para verificar el ganador.
