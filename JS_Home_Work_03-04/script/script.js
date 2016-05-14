var myConstructor = {
    createElement: function (collectionParams) {
        var element = document.createElement(collectionParams.tag);

        if (collectionParams.class) {
            if (collectionParams.class2 !== undefined) {
                element.classList.add(collectionParams.class, collectionParams.class2);
            } else {
                element.classList.add(collectionParams.class);
            }
        }

        if (collectionParams.parent) {
            var parent = document.querySelector(collectionParams.parent);
            parent.appendChild(element);
        }

        if (collectionParams.margin) {
            element.style.margin = collectionParams.margin;
        }

        if (collectionParams.padding) {
            element.style.padding = collectionParams.padding;
        }

        if (collectionParams.width) {
            element.style.width = collectionParams.width;
        }

        if (collectionParams.backgroundColor) {
            element.style.backgroundColor = collectionParams.backgroundColor;
        }

        if (collectionParams.content) {
            element.innerHTML = collectionParams.content;
        }

        if (collectionParams.inputType) {
            element.setAttribute('type', collectionParams.inputType);
        }

        if (collectionParams.inputValue) {
            element.setAttribute('value', collectionParams.inputValue);
        }

        return element;
    },

    createQuestions: function (questions, answers) {
        for (var i = 1; i <= questions; i++) {
            this.createElement({
                tag: 'h3',
                parent: 'form',
                content: i + '. Вопрос №' + i,
            });

            for (var j = 1; j <= answers; j++) {
                var checkbox = this.createElement({
                    tag: 'input',
                    parent: 'form',
                    inputType: 'checkbox',
                });

                var label = this.createElement({
                    class: 'checkbox',
                    tag: 'label',
                    parent: 'form',
                    content: 'Вариант ответа №' + j,
                    padding: '0px 0px 0px 20px',
                });

                label.insertAdjacentElement('afterBegin', checkbox);
            }
        }
    }
};

/* MAIN APP */
document.querySelector('body').style.backgroundColor = 'lightgrey';

myConstructor.createElement({
    class: 'wrapper',
    tag: 'div',
    parent: 'body',
    backgroundColor: 'white',
    width: '700px',
    margin: '50px auto',
    padding: '20px 50px 40px',
});

myConstructor.createElement({
    tag: 'h2',
    parent: '.wrapper',
    content: 'Тест по программированию',
});

myConstructor.createElement({
    tag: 'form',
    parent: '.wrapper',
});

myConstructor.createQuestions(3, 3);

myConstructor.createElement({
    class: 'btn',
    class2: 'btn-success',
    tag: 'input',
    parent: 'form',
    inputType: 'submit',
    inputValue: 'Проверить мои результаты',
});