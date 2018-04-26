(function () {

    document.querySelectorAll('body *').forEach(function(node) {
        if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
            node.parentNode.removeChild(node);
        }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style['overflow'] = 'auto';
    htmlNode.style['overflow-x'] = 'auto';
    htmlNode.style['overflow-y'] = 'auto';

})();
