//import { getUniqueElements } from "./src/logic.js";

const canvas = document.getElementById("gameCanvas");
const statsCanvas = document.getElementById("statsCanvas");
const statsContext = statsCanvas.getContext("2d");
const context = canvas.getContext("2d");
const mapWidth = 1200;
const mapHeight = 960;
const playerWidth = 48;
const playerHeight = 96;
const iconSize = 24;
const padding = 20;

const icons = {
  money: new Image(),
  quality: new Image(),
  motivation: new Image(),
  time: new Image(),
};

const playerImages = {
  down: new Image(),
  up: new Image(),
  left: new Image(),
  right: new Image(),
  idle: new Image(),
};

playerImages.down.src = "./img/Bob_run_down_16x16.png";
playerImages.up.src = "./img/Bob_run_up_16x16.png";
playerImages.left.src = "./img/Bob_run_left_16x16.png";
playerImages.right.src = "./img/Bob_run_right_16x16.png";
playerImages.idle.src = "./img/Bob_idle_16x16.png";

icons.money.src = './img/money_icon.png'; // Cambia la ruta a la imagen del icono de dinero
icons.quality.src = './img/calidad_icon.png'; // Cambia la ruta a la imagen del icono de calidad
icons.motivation.src = './img/motivacion_icon.png'; // Cambia la ruta a la imagen del icono de motivación
icons.time.src = './img/tiempo_icon.png';

const mapImage = new Image();
mapImage.src = "./img/habbo_juego.png";

let playerX = canvas.width / 2 - playerWidth / 2 - 100;
let playerY = canvas.height / 2 - playerHeight / 2 - 100;

// como el mapa fue creado en Tiled con una división de mapa por cuadrantes de 48x48 cada uno, se hacen los calculos
// con base a estas medidas por cudrantes
const tileWidth = 48;
const tileHeight = 48;
const mapWidthInTiles = Math.floor(mapWidth / tileWidth);
const colisionMap = [];

for (let i = 0; i < colisiones.length; i += mapWidthInTiles) {
  colisionMap.push(colisiones.slice(i, i + mapWidthInTiles));
}

function drawStats() {
  statsContext.clearRect(0, 0, statsCanvas.width, statsCanvas.height);
  statsContext.font = '16px "Press Start 2P"';
  statsContext.fillStyle = 'darkmagenta';

  // Dibuja las estadísticas
  const stats = [
    { icon: icons.money, label: ':', value: money },
    { icon: icons.quality, label: ':', value: calidad },
    { icon: icons.motivation, label: ':', value: motivacion },
    { icon: icons.time, label: ':', value: tiempo },
  ];

  const iconTextSpacing = 10; // Espacio reducido entre el icono y el texto
  const itemSpacing = 90; // Espacio aumentado entre las estadísticas
  const totalWidth = stats.reduce((acc, stat) => acc + iconSize + iconTextSpacing + statsContext.measureText(`${stat.label} ${stat.value}`).width, 0) + (stats.length - 1) * itemSpacing;
  const startX = (statsCanvas.width - totalWidth) / 2; // Centrar las estadísticas en el canvas

  let x = startX;
  const y = statsCanvas.height / 2;

  // Asegúrate de que no se dibuje fuera del canvas
  if (x < 0) {
    x = 0;
  }

  stats.forEach(stat => {
    // Verifica si el icono y texto se dibujarán fuera del canvas
    if (x + iconSize + iconTextSpacing + statsContext.measureText(`${stat.label} ${stat.value}`).width > statsCanvas.width) {
      return; // Deja de dibujar si hay riesgo de desbordamiento
    }

    statsContext.drawImage(stat.icon, x, y - iconSize / 2, iconSize, iconSize);
    statsContext.fillText(`${stat.label} ${stat.value}`, x + iconSize + iconTextSpacing, y + 5);
    x += iconSize + iconTextSpacing + statsContext.measureText(`${stat.label} ${stat.value}`).width + itemSpacing; // Ajusta el espaciado entre estadísticas
  });
}


// Estado del jugador
let direction = "down";
let moving = false;
let frame = 0;

const playerSpeed = 4;

// Captura el input del teclado
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

document.addEventListener("keydown", (e) => {
  if (e.key === "w") keys.w = true;
  if (e.key === "a") keys.a = true;
  if (e.key === "s") keys.s = true;
  if (e.key === "d") keys.d = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "w") keys.w = false;
  if (e.key === "a") keys.a = false;
  if (e.key === "s") keys.s = false;
  if (e.key === "d") keys.d = false;
});

let lastFrameTime = 0; // Tiempo del último frame
const frameInterval = 100; // Intervalo entre frames en milisegundos

function getPlayerBounds() {
  const visibleHeight = 68;
  const offsetY = playerHeight - visibleHeight;

  return {
    left: playerX,
    right: playerX + playerWidth,
    top: playerY - offsetY, //chanchullo
    bottom: playerY + playerHeight,
  };
}

setInterval(() => {
  const bounds = getPlayerBounds();
}, 100);

// Actualiza el estado del jugador
let lastPosition = { top: 0, left: 0, bottom: 0, right: 0 };

function checkCollision(x, y) {
  const bounds = {
    left: x,
    right: x + playerWidth,
    top: y,
    bottom: y + playerHeight,
  };

  const startTileX = Math.floor((bounds.left + 6) / tileWidth);
  const endTileX = Math.floor((bounds.right - 6) / tileWidth);
  const startTileY = Math.floor((bounds.top + 60) / tileHeight);
  const endTileY = Math.floor((bounds.bottom - 10) / tileHeight);

  for (let tileY = startTileY; tileY <= endTileY; tileY++) {
    for (let tileX = startTileX; tileX <= endTileX; tileX++) {
      if (colisionMap[tileY] && colisionMap[tileY][tileX] === 1693) {
        return true;
      }
    }
  }

  return false;
}

function update(currentTime) {
  moving = keys.w || keys.a || keys.s || keys.d;

  if (moving) {
    if (currentTime - lastFrameTime >= frameInterval) {
      frame = (frame + 1) % 6;
      lastFrameTime = currentTime;
    }
  } else {
    frame = 0;
  }

  let newX = playerX;
  let newY = playerY;

  // Determina la nueva posición basándose en la dirección del movimiento
  if (keys.w) {
    newY -= playerSpeed;
    direction = "up";
  }
  if (keys.a) {
    newX -= playerSpeed;
    direction = "left";
  }
  if (keys.s) {
    newY += playerSpeed;
    direction = "down";
  }
  if (keys.d) {
    newX += playerSpeed;
    direction = "right";
  }

  // Verificar colisión en la nueva posición
  if (!checkCollision(newX, newY)) {
    playerX = newX;
    playerY = newY;
  }
}

///////////////////////////////////////////////////// EVENTOS //////////////////////////////////////////////////////////
let money = 12000; //aleatorio
let calidad = 0;
let motivacion = 80;
let tiempo = 90;
const minEventos = 5;
const maxEventos = 10;

const timeInterval = 1000; // Intervalo de 1000 milisegundos (1 segundo)
setInterval(() => {
  if (tiempo > 0) {
    tiempo -= 1; // Decrementa el tiempo por 1 segundo
    drawStats(); // Redibuja las estadísticas para reflejar el nuevo valor
  }
}, timeInterval);

const eventos = getUniqueElements(10);
console.log(eventos);
const posiciones = [ [145,320],[145,433],[145,665],[410,190],[627,532],[246,790], [838,616],[1085,219],[1071,549],[536,756]]

const bubbleImage = new Image();
bubbleImage.src = 'img/icon_11.png';
const bubbleWidth = 48; // Ajusta según el tamaño de la burbuja
const bubbleHeight = 48; // Ajusta según el tamaño de la burbuja
const bubbleRadius = 24;
const borderWidth = 2; // Ancho del borde

// Variables para el hover de las burbujas
const hoverScale = 1.2; // Escala para el hover
let hoveredBubble = null;


function calcularPuntajeTotal(tiempo, calidad, motivacion, money) {
  let puntajeTotal = tiempo* 0.2 + calidad* 0.3 + motivacion* 0.2 + money/100 * 0.3;
  return puntajeTotal;
}

// Manejo del mouse
canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  hoveredBubble = null;

  for (let i = 0; i < posiciones.length; i++) {
    const [x, y] = posiciones[i];
    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
    if (distance < bubbleRadius) {
      hoveredBubble = i;
      break;
    }
  }
});

// Variables para el mensaje
let showMessage = false;
let message = "";
let messageBg = ""; // Puede ser un color o una imagen
let messageX = 0;
let messageY = 0;
let closeButton = null;

// Variables globales para los botones de acción
const actionButtonSize = 20; // Tamaño del botón de acción
let actionButtons = [];

function drawMessage() {
  if (showMessage) {
    const paddingSides = 30;  // Margen en los lados derecho, izquierdo e inferior
    const paddingTop = 50;  // Margen superior más grande
    const maxLineWidth = 420;  // Máximo ancho que una línea puede ocupar
    const lineHeight = 24;  // Altura de cada línea de texto
    const extraLineSpacing = 10; // Espacio extra entre el evento y las acciones

    context.font = '16px "Press Start 2P"';
    
    // Divide el texto del evento en líneas
    const eventDescription = message.split("\n\n")[0];
    const actionsDescriptions = message.split("\n\n")[1].split("\n");

    let lines = [];
    
    // Procesa la descripción del evento
    let currentLine = "";
    const words = eventDescription.split(" ");
    words.forEach((word) => {
      const testLine = currentLine + word + " ";
      const testWidth = context.measureText(testLine).width;

      if (testWidth > maxLineWidth) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine.trim()); // Agrega la última línea de la descripción del evento

    // Agrega un espacio extra entre la descripción del evento y las acciones
    lines.push(""); 

    // Procesa cada acción
    actionsDescriptions.forEach((action, index) => {
      const actionWords = action.split(" ");
      currentLine = "";

      actionWords.forEach((word) => {
        const testLine = currentLine + word + " ";
        const testWidth = context.measureText(testLine).width;

        if (testWidth > maxLineWidth) {
          lines.push(currentLine.trim());
          currentLine = word + " ";
        } else {
          currentLine = testLine;
        }
      });
      lines.push(currentLine.trim());
    });

    // Calcula la altura dinámica del cuadro en función del número de líneas
    const msgHeight = lines.length * lineHeight + paddingTop + paddingSides + (actionsDescriptions.length * (extraLineSpacing + actionButtonSize));
    const msgWidth = maxLineWidth + paddingSides * 2;

    messageX = (canvas.width - msgWidth) / 2;
    messageY = (canvas.height - msgHeight) / 2;

    // Dibuja el fondo
    if (messageBg instanceof Image) {
      context.drawImage(messageBg, messageX, messageY, msgWidth, msgHeight);
    } else {
      context.fillStyle = messageBg;
      context.fillRect(messageX, messageY, msgWidth, msgHeight);
    }

    // Dibuja el texto
    context.fillStyle = 'white';
    let yOffset = messageY + paddingTop;
    lines.forEach((line, index) => {
      context.fillText(line, messageX + paddingSides, yOffset);
      yOffset += lineHeight;
    });

    actionButtons = [];
    const numActions = actionsDescriptions.length;
    const buttonSpacing = (msgHeight - paddingTop - paddingSides - 260) / (numActions - 1); // Espacio entre botones
    
    actionsDescriptions.forEach((_, index) => {
      const buttonX = messageX + msgWidth - (paddingSides/2) - actionButtonSize;
      // Se calcula el buttonY en base al índice y el espaciado entre botones
      const buttonY = messageY + paddingTop + (index+1) * buttonSpacing;
    
      context.fillStyle = 'blue';
      context.fillRect(buttonX, buttonY - actionButtonSize / 2, actionButtonSize, actionButtonSize); // Cuadrado azul para el botón
      context.fillStyle = 'white';
      context.font = '12px "Press Start 2P"';
      context.fillText('>', buttonX + 5, buttonY - actionButtonSize / 2 + 15); // Texto ">" para el botón
    
      actionButtons.push({ x: buttonX, y: buttonY - actionButtonSize / 2, size: actionButtonSize, index });
    });
    
    // Dibuja el botón de cerrar
    const closeButtonSize = 20;
    const closeButtonPadding = 10;
    const closeButtonX = messageX + msgWidth - closeButtonSize - closeButtonPadding;
    const closeButtonY = messageY + closeButtonPadding;
    
    context.fillStyle = 'red';
    context.fillRect(closeButtonX, closeButtonY, closeButtonSize, closeButtonSize); // Cuadrado rojo
    context.fillStyle = 'white';
    context.font = '16px "Press Start 2P"';
    context.fillText('X', closeButtonX + 5, closeButtonY + 15); // Letra "X"
    
    // Guarda la posición del botón de cerrar para la detección de clics
    closeButton = { x: closeButtonX, y: closeButtonY, size: closeButtonSize };
  }
}

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Verificar si se hace clic en el botón de cerrar
  if (showMessage && closeButton) {
    const { x, y, size } = closeButton;
    if (mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size) {
      showMessage = false;
      closeButton = null;
      actionButtons = [];
      return;
    }
  }

  // Verificar si se hace clic en un botón de acción
  if (showMessage && actionButtons.length) {
    for (const button of actionButtons) {
      const { x, y, size, index } = button;
      if (mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size) {
        const selectedEvent = eventos.find(evento => evento.description === message.split("\n\n")[0]);
        if (selectedEvent) {
          motivacion += selectedEvent.actions[index].cost.motivacion;
          calidad += selectedEvent.actions[index].cost.calidad;
          money += selectedEvent.actions[index].cost.money;
          tiempo += selectedEvent.actions[index].cost.tiempo;
          showMessage = false;
          closeButton = null;
          actionButtons = [];
          // Elimina la burbuja y el evento correspondiente
          const eventIndex = eventos.indexOf(selectedEvent);
          if (eventIndex !== -1) {
            posiciones.splice(eventIndex, 1);
            eventos.splice(eventIndex, 1);
          }
        }
        return;
      }
    }
  }
  
  // Verifica si se hace clic en una burbuja
  for (let i = 0; i < posiciones.length; i++) {
    const [x, y] = posiciones[i];
    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
    if (distance < bubbleRadius) {
      console.log("Bubble clicked:", i);
      
      const event = eventos[i];

      // Establecer mensaje y fondo
      showMessage = true;
      message = event.description + "\n\n" + event.actions.map(action => "- " + action.description).join("\n");
      messageBg = 'black'; // Puede ser un color o una imagen

      break;
    }
  }
});


// Dibuja el personaje y eventos
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(mapImage, 0, 0, mapWidth, mapHeight);

  let image = playerImages[direction];
  let sourceX = frame * playerWidth;
  let sourceY = 0;

  if (!moving) {
    image = playerImages.idle;
    switch (direction) {
      case "down":
        sourceX = 3 * playerWidth;
        break;
      case "up":
        sourceX = 1 * playerWidth;
        break;
      case "left":
        sourceX = 2 * playerWidth;
        break;
      case "right":
        sourceX = 0 * playerWidth;
        break;
    }
  }

  context.drawImage(
    image,
    sourceX,
    sourceY,
    playerWidth,
    playerHeight,
    playerX,
    playerY,
    playerWidth,
    playerHeight
  );

  for (let i = 0; i < posiciones.length; i++) {
    const [posX, posY] = posiciones[i];

    // Determina el tamaño de la burbuja dependiendo de si está o no en hover
    const isHovered = i === hoveredBubble;
    const currentRadius = isHovered ? bubbleRadius * hoverScale : bubbleRadius;
    const currentSize = currentRadius * 2;

    // Dibuja el fondo azul
    context.beginPath();
    context.arc(posX, posY, currentRadius, 0, 2 * Math.PI);
    context.fillStyle = 'rgba(64, 224, 208, 0.5)';
    context.fill();

    // Dibuja el borde
    context.lineWidth = borderWidth;
    context.strokeStyle = 'black';
    context.stroke();

    // Dibuja la imagen de la burbuja
    context.drawImage(
      bubbleImage,
      posX - currentRadius,
      posY - currentRadius,
      currentSize,
      currentSize
    );
  }
  drawMessage();
  requestAnimationFrame(draw);
}



// Inicia la animación
function gameLoop(currentTime) {
  update(currentTime);
  draw();
  drawStats();
  requestAnimationFrame(gameLoop);
}

gameLoop();
