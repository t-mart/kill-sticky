(function () {

    document.querySelectorAll('body *').forEach(function(node) {
        if (getComputedStyle(node).position === 'fixed') {
            node.parentNode.removeChild(node);
        }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style['overflow'] = 'auto';
    htmlNode.style['overflow-x'] = 'auto';
    htmlNode.style['overflow-y'] = 'auto';
})();
