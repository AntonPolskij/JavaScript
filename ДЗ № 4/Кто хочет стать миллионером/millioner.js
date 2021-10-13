function Task(q, a1, a2, a3, a4, rt) {
  this.q = q;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
  this.rt = rt;
}
var task1 = new Task('\nКакой газ преобладает в атмосфере Земли?', '\n1: Кислород', '\n2: Азот', '\n3: Углекислый газ', '\n4: Водород', 2);

var task2 = new Task('\nКакого цвета была кожа у Шрека?', '\n1: Красная', '\n2: Синяя', '\n3: Зелёная', '\n4: Фиолетовая', 3);

var task3 = new Task('\nГде круглый год продолжительность дня и ночи одинаковая?', '\n1: Тропик Рака', '\n2: Экватор', '\n3: Северный полюс', '\n4: Южный полюс', 2);

var questions = [task1, task2, task3];
var ex;
var money = 0;
for (var i = 0; i < questions.length; i++) {
  ex = prompt('Вопрос # ' + (i + 1) + questions[i].q + questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4 + ' \n(-1 для выхода из игры)');
  if (isNaN(parseInt(ex)) || parseInt(ex) > 4) {
    while (isNaN(parseInt(ex)) || parseInt(ex) > 4) {
      ex = prompt('Ошибка! Повторите ввод\n' + '\n' + questions[i].q + questions[i].a1 + questions[i].a2 + questions[i].a3 + questions[i].a4 + '\n(-1 для выхода из игры)');
    }
  } else if (parseInt(ex) == -1) {
    break;
  }
  if (parseInt(ex) == parseInt(questions[i].rt)) {
    money += (i + 1) * 1000;
    alert('Верно!' + '\nБаланс: ' + money);
  } else {
    alert('Вы ответили неверно.\nКонец игры.')
    break;
  }
}
alert('Вы заработали ' + money + ' рублей');