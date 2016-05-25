$(function () {
    
    $.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function (data) {

        var arraySkills = [];
        var arrayNames = [];
        var arrayFriends = [];

        // Task #1. Массив скиллов (поле skills) всех людей, не должно быть
        // повторяющихся скиллов, так же они должны быть отсортированы по алфавиту
        arraySkills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));

        // Task #2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends)
        arrayNames = _.map(_.sortBy(data, 'friends.length'), 'name');

        // Task #3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей
        arrayFriends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name'));

        // CONSOLE.LOG
        console.log('Array of skills sorted from A to Z:', arraySkills);
        console.log('Array of names sorted by amount friends:', arrayNames);
        console.log('Array of all names with unique friends:', arrayFriends);
        
    })
});