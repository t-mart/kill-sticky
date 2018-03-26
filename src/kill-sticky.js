(function () {
    // original kill-sticky code
    (function () {
        var i, elements = document.querySelectorAll('body *');

        for (i = 0; i < elements.length; i++) {
            if (getComputedStyle(elements[i]).position === 'fixed') {
                elements[i].parentNode.removeChild(elements[i]);
            }
        }
    })();


    // restore scrolling
    document.querySelector('body').style.overflow = 'visible';
})();
