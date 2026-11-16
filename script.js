
let count = 0;
let timer = null;

function startTimer() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function() {

        document.getElementById("display").innerHTML = count;

        count++;

    }, 1000);
}

function stopTimer() {

    clearInterval(timer);
    timer = null;

}

function resetTimer() {

    clearInterval(timer);

    timer = null;
    count = 0;

    document.getElementById("display").innerHTML = 0;

}
