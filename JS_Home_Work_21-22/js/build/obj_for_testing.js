'use strict';

var myTest = [{
    question: 'В какую компанию хочет Вова?',
    answers: [{ answer: 'Global Logic', correct: false }, { answer: 'Nix Solutions', correct: false }, { answer: 'EPAM', correct: true }]
}, {
    question: 'Курсы какой компании мы изучаем?',
    answers: [{ answer: 'Prometheus', correct: false }, { answer: 'GoIT', correct: true }, { answer: 'Lviv IT School', correct: false }]
}, {
    question: 'Какое название нашей группе мы придумали на первом занятии?',
    answers: [{ answer: 'iTeam', correct: true }, { answer: 'Crazy Developers', correct: false }, { answer: 'Funny Students', correct: false }]
}];

try {
    module.exports = myTest;
} catch (e) {}
