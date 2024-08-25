const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const mapWidth = 1200;
const mapHeight = 960;
const playerWidth = 48;
const playerHeight = 96;

const playerImages = {
    down: new Image(),
    up: new Image(),
    left: new Image(),
    right: new Image(),
    idle: new Image()
};

playerImages.down.src = './img/Bob_run_down_16x16.png';
playerImages.up.src = './img/Bob_run_up_16x16.png';
playerImages.left.src = './img/Bob_run_left_16x16.png';
playerImages.right.src = './img/Bob_run_right_16x16.png';
playerImages.idle.src = './img/Bob_idle_16x16.png';

const mapImage = new Image();
mapImage.src = './img/habbo_juego.png';

let playerX = canvas.width / 2 - playerWidth / 2 -100;
let playerY = canvas.height / 2 - playerHeight / 2 -100;

// como el mapa fue creado en Tiled con una división de mapa por cuadrantes de 48x48 cada uno, se hacen los calculos
// con base a estas medidas por cudrantes
const tileWidth = 48;
const tileHeight = 48;
const mapWidthInTiles = Math.floor(mapWidth / tileWidth); 
const colisionMap = [];

for (let i = 0; i < colisiones.length; i += mapWidthInTiles) {
    colisionMap.push(colisiones.slice(i, i + mapWidthInTiles));
}

// Estado del jugador
let direction = 'down';
let moving = false;
let frame = 0;

const playerSpeed = 4;

// Captura el input del teclado
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'w') keys.w = true;
    if (e.key === 'a') keys.a = true;
    if (e.key === 's') keys.s = true;
    if (e.key === 'd') keys.d = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'w') keys.w = false;
    if (e.key === 'a') keys.a = false;
    if (e.key === 's') keys.s = false;
    if (e.key === 'd') keys.d = false;
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
        bottom: playerY + playerHeight
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
        bottom: y + playerHeight
    };


    const startTileX = Math.floor((bounds.left+6) / tileWidth);
    const endTileX = Math.floor((bounds.right-6) / tileWidth);
    const startTileY = Math.floor((bounds.top + 60) / tileHeight);
    const endTileY = Math.floor((bounds.bottom - 10) / tileHeight); 

    for (let tileY = startTileY; tileY <= endTileY; tileY++) {
        for (let tileX = startTileX; tileX <= endTileX; tileX++) {
            if (colisionMap[tileY] && colisionMap[tileY][tileX] === 1693) {
                console.log('Colisión detectada en:', tileX, tileY);
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
        direction = 'up';
    }
    if (keys.a) {
        newX -= playerSpeed;
        direction = 'left';
    }
    if (keys.s) {
        newY += playerSpeed;
        direction = 'down';
    }
    if (keys.d) {
        newX += playerSpeed;
        direction = 'right';
    }
    checkNearbyEvents();

    // Verificar colisión en la nueva posición
    if (!checkCollision(newX, newY)) {
        playerX = newX;
        playerY = newY;
    }
}



///////////////////////////////////////////////////// EVENTOS //////////////////////////////////////////////////////////
const money = 1000 //aleatorio
const maxVida = 100
//const vida = 100
const calidad = 0
const motivacion = 100
const time = 180 //aleatorio entre 2 y 5 minutos
const minEventos = 5 //aleatorio entre 5 y 10
const maxEventos = 10

const barraVidaImg = new Image();
barraVidaImg.src = '.img/arrow_4.png';

const eventos = [
    { 
        id:323
      x: 100, 
      y: 200, 
      text: "Asignación de Recursos", 
      descrip: "Debes asignar un diseñador para un proyecto urgente. El diseñador principal está ocupado.", 
      decision_1: { vida: -5, money: 10 },  // Reasignar al diseñador principal
      decision_2: { vida: -2, money: -10 }, // Contratar a un freelance
      decision_3: { vida: 0, money: 0 }     // Delegar a un diseñador menos experimentado
    },
    { 
      x: 250, 
      y: 300, 
      text: "Manejo de Conflictos", 
      descrip: "Dos miembros del equipo están en desacuerdo sobre la dirección creativa de una campaña.", 
      decision_1: { vida: 5, money: -5 },  // Mediar y llegar a un consenso
      decision_2: { vida: -5, money: 0 },  // Tomar una decisión ejecutiva
      decision_3: { vida: 2, money: 5 }    // Dividir responsabilidades y fusionar más adelante
    },
    { 
      x: 400, 
      y: 150, 
      text: "Gestión del Tiempo", 
      descrip: "Recibiste un proyecto con un plazo corto y el equipo ya está ocupado.", 
      decision_1: { vida: 3, money: -10 }, // Solicitar una extensión del plazo
      decision_2: { vida: -10, money: 15 }, // Priorizar el nuevo proyecto
      decision_3: { vida: -5, money: 5 }    // Dividir el equipo en subgrupos
    },
    { 
      x: 550, 
      y: 250, 
      text: "Supervisión Remota", 
      descrip: "Un miembro remoto no ha entregado sus tareas a tiempo y no ha estado disponible.", 
      decision_1: { vida: -5, money: 0 },  // Enviar un correo formal y establecer expectativas
      decision_2: { vida: 5, money: -5 },  // Videollamada privada para discutir el problema
      decision_3: { vida: -10, money: 5 }  // Reasignar sus tareas a otro miembro
    },
    { 
      x: 700, 
      y: 200, 
      text: "Implementación de Nuevas Herramientas", 
      descrip: "La empresa adquirió una nueva herramienta de gestión, pero algunos miembros están reacios al cambio.", 
      decision_1: { vida: -5, money: 10 }, // Implementar un programa de capacitación
      decision_2: { vida: 0, money: -5 },  // Permitir el uso de herramientas antiguas mientras se adaptan
      decision_3: { vida: -10, money: 15 } // Hacer la herramienta obligatoria
    },
    { 
      x: 850, 
      y: 300, 
      text: "Control de Calidad", 
      descrip: "Se descubre un error en la revisión final de un proyecto importante.", 
      decision_1: { vida: -5, money: -10 }, // Retrasar la entrega para corregir el error
      decision_2: { vida: -10, money: 5 },  // Entregar a tiempo y corregir en una actualización posterior
      decision_3: { vida: -2, money: 0 }    // Informar al cliente y ofrecer solución parcial
    },
    { 
      x: 1000, 
      y: 250, 
      text: "Feedback del Cliente", 
      descrip: "Un cliente insatisfecho ha enviado un feedback negativo sobre un proyecto entregado.", 
      decision_1: { vida: 5, money: -5 },  // Ofrecer una reunión para discutir las quejas
      decision_2: { vida: -5, money: 5 },  // Ofrecer un reembolso parcial o descuento
      decision_3: { vida: 2, money: 0 }    // Reasignar un equipo para corregir el trabajo
    },
    { 
      x: 1150, 
      y: 150, 
      text: "Gestión del Estrés", 
      descrip: "Un miembro del equipo está estresado y su rendimiento ha disminuido.", 
      decision_1: { vida: 10, money: -5 }, // Ofrecer días libres o un horario más flexible
      decision_2: { vida: 5, money: 0 },   // Redistribuir su carga de trabajo
      decision_3: { vida: 5, money: -10 }  // Programar una charla para ofrecer apoyo emocional
    }
  ];
  

function drawEvents() {
    eventos.forEach(evento => {
        // Dibujar la burbuja en la posición del evento
        context.beginPath();
        context.arc(evento.x, evento.y, 20, 0, Math.PI * 2); // Ejemplo de burbuja circular
        context.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Color y transparencia
        context.fill();
        context.closePath();
    });
}

function dibujarFondoBarra() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 960, 1200, 20);
}

function dibujarBarraVida() {
    const anchoBarra = (vida / vidaMaxima) * 184;
    ctx.drawImage(barraVidaImg, (canvas.width - 184) / 2, 964, anchoBarra, 12);
}


canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    eventos.forEach(evento => {
        const distanceX = Math.abs(mouseX - evento.x);
        const distanceY = Math.abs(mouseY - evento.y);

        if (distanceX < 20 && distanceY < 20) { // Radio de la burbuja
            // Mostrar tarjeta del evento
            mostrarTarjeta(evento.descripcion);
        }
    });
});


function checkNearbyEvents() {
    const playerBounds = getPlayerBounds();

    eventos.forEach(evento => {
        const distanceX = Math.abs(evento.x - playerBounds.left);
        const distanceY = Math.abs(evento.y - playerBounds.bottom);
        
        // Si el personaje está lo suficientemente cerca, activa el evento
        if (distanceX < 50 && distanceY < 50) { // Ajusta el rango de detección según sea necesario
            // Mostrar tarjeta del evento
            mostrarTarjeta(evento.descrip);
        }
    });
}

function mostrarTarjeta(descripcion) {
    // Muestra una tarjeta en la pantalla con la descripción del evento
    const tarjeta = document.createElement('div');
    tarjeta.style.position = 'fixed';
    tarjeta.style.top = '50%';
    tarjeta.style.left = '50%';
    tarjeta.style.transform = 'translate(-50%, -50%)';
    tarjeta.style.backgroundColor = 'white';
    tarjeta.style.padding = '20px';
    tarjeta.style.border = '1px solid #000';
    tarjeta.style.zIndex = '1000'; // Asegurarse de que la tarjeta esté sobre otros elementos
    tarjeta.innerHTML = descripcion;

    document.body.appendChild(tarjeta);

    // Cierra la tarjeta cuando se hace clic fuera de ella
    tarjeta.addEventListener('click', () => {
        document.body.removeChild(tarjeta);
    });
}



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
            case 'down': sourceX = 3 * playerWidth; break;
            case 'up': sourceX = 1 * playerWidth; break;
            case 'left': sourceX = 2 * playerWidth; break;
            case 'right': sourceX = 0 * playerWidth; break;
        }
    }

    drawEvents();

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


    requestAnimationFrame(draw);
}

// Inicia la animación
function gameLoop(currentTime) {
    update(currentTime);
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
