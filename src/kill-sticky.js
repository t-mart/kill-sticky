(function () {

    document.querySelectorAll('body *').forEach(function(node) {
        if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
            node.parentNode.removeChild(node);
        }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style['overflow'] = 'visible';
    htmlNode.style['overflow-x'] = 'visible';
    htmlNode.style['overflow-y'] = 'visible';

})();
