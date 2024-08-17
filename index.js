const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Dimensiones del mapa y jugador
const mapWidth = 1200;
const mapHeight = 960;
const playerWidth = 48;
const playerHeight = 96;

// Carga las imágenes
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

// Posición inicial del jugador
let playerX = canvas.width / 2 - playerWidth / 2 -100;
let playerY = canvas.height / 2 - playerHeight / 2 -100;

const tileWidth = 48; // Tamaño correcto del tile
const tileHeight = 48;
const mapWidthInTiles = Math.floor(mapWidth / tileWidth); 
const colisionMap = [];

// Convierte el arreglo unidimensional en un bidimensional
for (let i = 0; i < colisiones.length; i += mapWidthInTiles) {
    colisionMap.push(colisiones.slice(i, i + mapWidthInTiles));
}

// Estado del jugador
let direction = 'down';
let moving = false;
let frame = 0;

// Velocidad del jugador (ajustada 50% más rápida)
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
const frameInterval = 100; // Intervalo entre frames en milisegundos (ajustar según necesites)

function getPlayerBounds() {
    const visibleHeight = 68; // Altura visible del personaje
    const offsetY = playerHeight - visibleHeight; // El sobrante invisible

    return {
        left: playerX,
        right: playerX + playerWidth,
        top: playerY - offsetY, // Ajuste para considerar solo la parte visible
        bottom: playerY + playerHeight
    };
}

setInterval(() => {
    const bounds = getPlayerBounds();
}, 100); // Imprime cada 100 ms

// Actualiza el estado del jugador
let lastPosition = { top: 0, left: 0, bottom: 0, right: 0 };

function checkCollision(x, y) {
    const bounds = {
        left: x,
        right: x + playerWidth,
        top: y, // Ajusta para considerar solo la parte visible
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

    // Verificar colisión en la nueva posición
    if (!checkCollision(newX, newY)) {
        playerX = newX;
        playerY = newY;
    }
}


// Dibuja el personaje
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mapImage, 0, 0, mapWidth, mapHeight);

    let image = playerImages[direction];
    let sourceX = frame * playerWidth;
    let sourceY = 0; // Ajuste para el recorte de la imagen

    if (!moving) {
        image = playerImages.idle;
        switch (direction) {
            case 'down': sourceX = 3 * playerWidth; break;
            case 'up': sourceX = 1 * playerWidth; break;
            case 'left': sourceX = 2 * playerWidth; break;
            case 'right': sourceX = 0 * playerWidth; break;
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

    requestAnimationFrame(draw);
}

// Inicia la animación
function gameLoop(currentTime) {
    update(currentTime);
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
