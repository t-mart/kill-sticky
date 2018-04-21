(function () {
    (function () {
        var i, elements = document.querySelectorAll('*');

        for (i = 0; i < elements.length; i++) {

            var computedStyle = getComputedStyle(elements[i]);

            if (computedStyle.position === 'fixed') {
                elements[i].parentNode.removeChild(elements[i]);
            }
            if (computedStyle.overflow === 'hidden') {
                elements[i].style['overflow'] = 'auto';
            }
            if (computedStyle['overflow-x'] === 'hidden') {
                elements[i].style['overflow-x'] = 'auto';
            }
            if (computedStyle['overflow-y'] === 'hidden') {
                elements[i].style['overflow-y'] = 'auto';
            }

        }
    })();
})();
