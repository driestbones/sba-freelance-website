// necessary require for webpack to discover css and images referenced only in
// the html
require('./css/styles.scss');
require('../images/320.jpeg');
require('../images/96.jpg');
require('../images/steak-and-carrots.jpg');
require('../images/shrimp-roll.jpg');

for (var i=1; i<=24; i++) {
    require('../images/foods/img-' + i + '.jpg');
    require('../images/thumbs/img-' + i + '_tn.jpg');
}

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

var imageModalId = 'image-modal',
    $imageModal = document.getElementById(imageModalId);

// Clicking on a thumbnail will open a modal
var thumbnails = document.getElementsByClassName('thumbnail');
for (var i=0; i < thumbnails.length; i++) {
    thumbnails.item(i).parentElement.addEventListener('click', function(event) {
        event.preventDefault();
        var $link = this.querySelector('a');
        console.log($link);
        $imageModal.querySelector('img').src = 'images/foods/' + $link.dataset['image-name'];
        $imageModal.classList.toggle('is-active');
    });
}

// Clicking on any modal-close will close the modal
var closeButtons = document.getElementsByClassName('modal-close');
for (var i=0; i < closeButtons.length; i++) {
    closeButtons.item(i).addEventListener('click', function() {
        this.parentElement.classList.toggle('is-active');
    });
}

// Escape will always exit the modal
document.addEventListener('keypress', function(evt) {
    if (evt.key === 'Escape') {
        var modals = document.getElementsByClassName('modal')
        for (var i=0; i<modals.length; i++) {
            modals.item(i).classList.remove('is-active');
        }
    }
});

// Clicking on a modal background will always close the modal
var modalBackgrounds = document.getElementsByClassName('modal-background');
for (var i=0; i<modalBackgrounds.length; i++) {
    modalBackgrounds.item(i).addEventListener('click', function(ev) {
        this.parentElement.classList.remove('is-active');
    });
}
