var games = 5;
var s1 = 0;
var s2 = 0;
var gameOver = false;

document.querySelector("#p1").addEventListener("click", function () {
    if (!gameOver) {
        s1++;
        document.getElementById("s1").innerText = s1;
        if (s1 == games) {
            gameOver = true;
            document.getElementById("s1").style.color = "green";
        }
    }
});

document.querySelector("#p2").addEventListener("click", function () {
    if (!gameOver) {
        s2++;
        document.getElementById("s2").innerText = s2;
        if (s2 == games) {
            gameOver = true;
            document.getElementById("s2").style.color = "green";
        }
    }
});

document.querySelector("#reset").addEventListener("click", function () {
    document.getElementById("s1").innerText = "0";
    document.getElementById("s2").innerText = "0";
    gameOver = false;
    document.getElementById("s1").style.color = "black";
    document.getElementById("s2").style.color = "black";
    s1 = 0;
    s2 = 0;
});

document.querySelector("input").addEventListener("change", function () {
    document.getElementById("games").innerText = document.querySelector("input").value;
    games = document.querySelector("input").value;
});
