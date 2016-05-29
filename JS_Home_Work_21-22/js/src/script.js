$(function () {

    let result = 0;
    let successfully = false;
    let myTest = [
        {
            question: 'В какую компанию хочет Вова?',
            answers: [
                {answer: 'Global Logic', correct: false},
                {answer: 'Nix Solutions', correct: false},
                {answer: 'EPAM', correct: true},
            ],
        },
        {
            question: 'Курсы какой компании мы изучаем?',
            answers: [
                {answer: 'Prometheus', correct: false},
                {answer: 'GoIT', correct: true},
                {answer: 'Lviv IT School', correct: false},
            ],
        },
        {
            question: 'Какое название нашей группе мы придумали на первом занятии?',
            answers: [
                {answer: 'iTeam', correct: true},
                {answer: 'Crazy Developers', correct: false},
                {answer: 'Funny Students', correct: false},
            ],
        },
    ];


    // working with localStorage
    let stringJSON = JSON.stringify(myTest);
    localStorage.setItem('myTest', stringJSON);
    let objectJS = localStorage.getItem('myTest');
    let myTestFromLocalStorage = JSON.parse(objectJS);


    // create template
    let $html = $(template).html();
    let tmpl = _.template($html);
    let content = tmpl({
        data: myTestFromLocalStorage,
    });
    $('form').prepend(content);


    // modal windows
    function createModalWindow (checked) {
        let $body = $('body');
        let $modalContent;

        if (result < 0) {
            result = 0;
        }

        if (checked) {
            $modalContent = (
            '<div class="modal-window">' +
                '<div class="modal-window-content">' +
                    '<h1 class="successfully">Поздравляем! Тест пройден</h1>' +
                    '<img src="img/successfully.jpg" alt="successfully">' +
                    '<input type="button" id="tryAgain" class="btn btn-success center-block" value="Закрыть">' +
                '</div>' +
            '</div>');

        } else {
            $modalContent = (
            '<div class="modal-window">' +
                '<div class="modal-window-content">' +
                    '<h1 class="unsuccessfully">Сожалеем! Тест не пройден</h1>' +
                    '<img src="img/unsuccessfully.jpg" alt="unsuccessfully">' +
                    '<input type="button" id="tryAgain" class="btn btn-danger center-block" value="Повторить тест">' +
                '</div>' +
            '</div>');
        }

        $body.append($modalContent);


        //try again
        $(tryAgain).on('click', (function() {

            $('#form input:checkbox').prop('checked', false);
            $('.modal-window').remove();
            result = 0;
            successfully = false;
        }));

    };

    // check results
    $(checkResults).on('click', (function() {

        $('#form input:checkbox:checked').each(function(){

            if ($(this).val() == 1) {
                result++;
            } else {
                result--;
            }
        });

        if (result == myTestFromLocalStorage.length) {
            successfully = true;
            createModalWindow(successfully);
        } else {
            createModalWindow(successfully);
        }

    }));

});


