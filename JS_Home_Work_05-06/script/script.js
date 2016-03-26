// variables
var ZERO_TIME = '00:00:00:000';

var onDisplay = document.querySelector('#timerDisplay');
onDisplay.innerHTML = ZERO_TIME;

var btnStart = document.querySelector('#btnStart');
btnStart.innerHTML = 'START';

var btnReset = document.querySelector('#btnReset');
btnReset.innerHTML = 'RESET';

var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = new Date(0).getMilliseconds();
var hoursStr;
var minutesStr;
var secondsStr;
var millisecondsStr;
var timerDisplay;
var timerID;

// functions
function clickStart() {
    timerID = setInterval(createTimer, 4);
    btnStart.classList.remove('btn-success');
    btnStart.classList.add('btn', 'btn-info');
    btnStart.innerHTML = 'PAUSE';
    onDisplay.style.color = 'black';
    onDisplay.style.transition = 'all 1s ease';
    btnStart.removeEventListener('click', clickStart);
    btnStart.addEventListener('click', clickPause);
}

function clickPause() {
    clearInterval(timerID);
    btnStart.classList.remove('btn-info');
    btnStart.classList.add('btn', 'btn-success');
    btnStart.innerHTML = 'CONTINUE';
    onDisplay.style.color = 'red';
    onDisplay.style.transition = 'all 1s ease';
    btnStart.removeEventListener('click', clickPause);
    btnStart.addEventListener('click', clickStart);
}

function clickReset() {
    clearInterval(timerID);
    onDisplay.innerHTML = ZERO_TIME;
    hours = 0;
    minutes = 0;
    seconds = 0;
    btnStart.classList.remove('btn-warning');
    btnStart.classList.add('btn', 'btn-success');
    btnStart.innerHTML = 'START';
    onDisplay.style.color = 'black';
    onDisplay.style.transition = 'all 1s ease';
    btnStart.removeEventListener('click', clickPause);
    btnStart.addEventListener('click', clickStart);
}

function createTimer() {
    milliseconds += 4;

    if (milliseconds >= 995) {
        milliseconds = 10;
        seconds++;
    }

    if (milliseconds < 10) {
        millisecondsStr = '00' + milliseconds;
    } else {
        millisecondsStr = milliseconds;
    }

    if (milliseconds >= 10 && milliseconds < 100) {
        millisecondsStr = '0' + milliseconds;
    } else {
        millisecondsStr = milliseconds;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (seconds < 10) {
        secondsStr = '0' + seconds;
    } else {
        secondsStr = seconds;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    if (minutes < 10) {
        minutesStr = '0' + minutes;
    } else {
        minutesStr = minutes;
    }

    if (hours < 10) {
        hoursStr = '0' + hours;
    } else {
        hoursStr = hours;
    }

    timerDisplay = hoursStr + ':' + minutesStr + ':' + secondsStr + ':' + millisecondsStr;
    onDisplay.innerHTML = timerDisplay;
}

// called functions
btnStart.addEventListener('click', clickStart);
btnReset.addEventListener('click', clickReset);




