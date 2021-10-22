var SNAKE_FIELD_X = 20,
    SNAKE_FIELD_Y = 20,
    SNAKE_SPEED = 275,
    snake = [],
    direction = 'y+',
    score = 0,
    snake_timer,
    bomb_timer,
    bombCount = 0,
    scoreCount = document.querySelector('.score'),
    snakeField = document.querySelector('.snake-field');
// Игровое поле
window.onload = init;
function init() {
    for (var i = 0; i < SNAKE_FIELD_Y; i++) {
        var row = document.createElement('div');
        row.className = 'field-row ' + 'row-' + i;
        for (var j = 0; j < SNAKE_FIELD_X; j++) {
            var cell = document.createElement('div');
            cell.className = 'field-cell ' + 'cell-' + i + '-' + j;
            row.append(cell);
        }
        snakeField.append(row);
    }
    addEventListener('keydown', changeDirection);
}

function startGame() {
    document.querySelector('.start').innerHTML = 'New Game';
    document.querySelector('.start').onclick = restart;
    respawn();
    scoreCount.innerHTML = '<h1>Счёт: <span>' + score + '</span> </h1>';
    snake_timer = setInterval(move, SNAKE_SPEED);
    bomb_timer = setInterval(createBomb, 7000);
    setTimeout(createFood, 3000);
}

//Расположение змейки

function respawn() {
    var start_x = parseInt(SNAKE_FIELD_X / 2);
    var start_y = parseInt(SNAKE_FIELD_Y / 2);
    var snake_head = document.querySelector('.cell-' + (start_y - 1) + '-' + start_x);
    snake_head.classList.add("snake-cell");
    var snake_tail = document.querySelector('.cell-' + start_y + '-' + start_x);
    snake_tail.classList.add("snake-cell");
    snake.push(snake_tail);
    snake.push(snake_head);
}

function move() {
    var snake_head_class = snake[snake.length - 1].getAttribute('class').split(' ');
    var coord_y = parseInt(snake_head_class[1].split('-')[1]);
    var coord_x = parseInt(snake_head_class[1].split('-')[2]);
    var new_unit;
    switch (direction) {
        case 'y+':
            new_unit = document.querySelector('.cell-' + (coord_y - 1) + '-' + coord_x);
            if (new_unit == undefined) {
                new_unit = document.querySelector('.cell-' + (SNAKE_FIELD_Y - 1) + '-' + coord_x);
            }
            break;
        case 'y-':
            new_unit = document.querySelector('.cell-' + (coord_y + 1) + '-' + coord_x);
            if (new_unit == undefined) {
                new_unit = document.querySelector('.cell-' + 0 + '-' + coord_x);
            }
            break;
        case 'x+':
            new_unit = document.querySelector('.cell-' + coord_y + '-' + (coord_x + 1));
            if (new_unit == undefined) {
                new_unit = document.querySelector('.cell-' + coord_y + '-' + 0);
            }
            break;
        case 'x-':
            new_unit = document.querySelector('.cell-' + coord_y + '-' + (coord_x - 1));
            if (new_unit == undefined) {
                new_unit = document.querySelector('.cell-' + coord_y + '-' + (SNAKE_FIELD_X - 1));
            }
            break;
    }
    if (!isSnakeCell(new_unit) && !haveBomb(new_unit)) {
        new_unit.classList.add('snake-cell');
        snake.push(new_unit);
        if (!haveFood(new_unit)) {
            var removed = snake.splice(0, 1)[0];
            removed.classList.remove('snake-cell');
        }
    } else {
        clearInterval(snake_timer);
        clearInterval(bomb_timer);
        if (confirm('Конец игры!\nВаш счет ' + score + '\nНачать заново?')) {
            location.reload();
        }
    }
}
// Не врезалась ли змейка в себя.
function isSnakeCell(unit) {
    var check = false;
    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}
// проверка на еду.
function haveFood(unit) {
    var check = false;
    var unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('food-cell')) {
        check = true;
        createFood();
        score++;
        unit.classList.remove('food-cell');
        scoreCount.innerHTML = '<h1>Счёт: <span>' + score + '</span> </h1>';
    }
    return check;
}

function haveBomb(unit) {
    var check = false;
    var unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('bomb-cell')) {
        check = true;
    }
    return check;
}

function createFood() {
    var food = false;

    while (!food) {
        var food_x = parseInt(Math.random() * SNAKE_FIELD_X);
        var food_y = parseInt(Math.random() * SNAKE_FIELD_Y);
        var food_cell = document.querySelector('.cell-' + food_y + '-' + food_x);
        var food_cell_classes = food_cell.getAttribute('class').split(' ');
        if (!food_cell_classes.includes('snake-cell') && (!food_cell_classes.includes('bomb-cell'))) {
            food_cell.classList.add('food-cell');
            food = true;
        }
    }
}

function createBomb() {
    var bomb = false;
    while (!bomb) {
        var bomb_x = parseInt(Math.random() * SNAKE_FIELD_X);
        var bomb_y = parseInt(Math.random() * SNAKE_FIELD_Y);
        var bomb_cell = document.querySelector('.cell-' + bomb_y + '-' + bomb_x);
        var bomb_cell_classes = bomb_cell.getAttribute('class').split(' ');
        if (!bomb_cell_classes.includes('snake-cell') && (!bomb_cell_classes.includes('food-cell'))) {
            bomb_cell.classList.add('bomb-cell');
            bomb = true;
            bombCount++;
        }
    }
    if (bombCount == 15) {
        var bombs = document.querySelectorAll('.bomb-cell');
        for (i of bombs) {
            i.classList.remove('bomb-cell');
        }
    }
}

function changeDirection(e) {
    switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}
function restart() {
    location.reload();
}