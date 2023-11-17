document.addEventListener('DOMContentLoaded', function () {
    var draggableElems = document.querySelectorAll('.puzzle-container img');
    draggableElems.forEach(function(elem) {
        new Draggabilly(elem);
    });
});
