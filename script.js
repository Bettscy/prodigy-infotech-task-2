let timer;
let startTime;
let elapsedTime = 0;
let laps = [];

function displayElapsedTime() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.querySelector('.display').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        displayElapsedTime();
    }, 10);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    displayElapsedTime();
}

function lapTimer() {
    const lapTime = elapsedTime;
    laps.push(lapTime);
    const lapList = document.querySelector('.lap-times');
    const lapItem = document.createElement('li');
    const minutes = Math.floor(lapTime / 60000);
    const seconds = Math.floor((lapTime % 60000) / 1000);
    const milliseconds = Math.floor((lapTime % 1000) / 10);
    lapItem.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    lapList.appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTimer);
