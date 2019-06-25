var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});

// button.addEventListener("click", function () {
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });