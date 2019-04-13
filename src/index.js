// necessary require for webpack to discover css
require('./styles.scss');
require('./images/320.jpeg');

var burgers  = document.querySelectorAll(".burger");
for (var i=0; i<burgers.length; i++) {
    var b = burgers.item(i);
    var dataTarget = b.dataset["target"];
    var target = document.getElementById(dataTarget)

    b.addEventListener("click", function() {
        b.classList.toggle("is-active");
        target.classList.toggle("is-active");
    });
}