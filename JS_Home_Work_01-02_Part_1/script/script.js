var number = prompt('Введите число для возведения в степень: ');
var power = prompt('Введите степень: ');

function involution(number, power) {
    var result = Math.exp(Math.log(number) * power);
    return result;
}

console.log("Результат возведения числа " + number + " в степень " + power + " равен "
    + Math.round(involution(number, power)));

/*
 alert("Результат возведения числа " + number + " в степень " + power + " равен "
 + Math.round(involution(number, power)));
 */