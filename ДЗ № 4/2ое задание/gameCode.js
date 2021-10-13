//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

getChoise(works.a00, works.a1, works.a2, works.a0);//Выводим первый вопрос
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        getChoise(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1:
            case 2:     // Второе действие, если во 2 окне ввели 1 или 2 то переходим на 4 окно
                getChoise(works.d00, works.d1, works.d2, works.d0)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        getChoise(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1:
            case 2: // Второе действие
                getChoise(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var a = +prompt('Введите номер вопроса, для просмотра ваших ответов' + '\n-1 для выхода');
while (a != -1) {
    alert(answers[a - 1][0] + '\nВаш ответ ' + answers[a - 1][1]);
    a = +prompt('Введите номер вопроса, для просмотра ваших ответов' + '\n-1 для выхода');
}
alert('Спасибо за игру');
console.log(answers);
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}