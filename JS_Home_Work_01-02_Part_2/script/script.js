var array = [];
var correctName;
var flag = false;

for (var i = 1; i <= 5; i++) {
    array[i] = prompt("Введите " + i + "-ое имя: ");
}

correctName = prompt("Введите имя для проверки: ");

for (var i = 1; i <= 5; i++)
    if (array[i] === correctName)
        flag = true;

if (flag)
    alert(correctName + ", вы успешно вошли");
else
    alert("Ошибка! Введенное имя пользователя не существует в массиве!");

/*
if (array.indexOf(correctName) == -1)
    alert("Ошибка! Вход не выполнен! Указанное имя не найдено!");
else
    alert(correctName + ", вы успешно вошли");
*/
