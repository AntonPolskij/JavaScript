function getChoise(quest, ans1, ans2, s) {
    do {
        ok = false;
        event = +prompt(quest + ans1 + ans2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(s, event);
            switch (event) {
                case 1:
                    answers.push([quest, ans1]);
                    break;
                case 2:
                    answers.push([quest, ans2]);
                    break;
            }
        }
    } while (!ok);
}