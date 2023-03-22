(function () {

    document.querySelectorAll('body *').forEach(function(node) {
        if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
            node.parentNode.removeChild(node);
        }
    });

    document.querySelectorAll('html *').forEach(function(node) {
        var s = getComputedStyle(node);
        if ('hidden' === s['overflow']) { node.style.setProperty('overflow', 'visible', 'important'); }
        if ('hidden' === s['overflow-x']) { node.style.setProperty('overflow-x', 'visible', 'important'); }
        if ('hidden' === s['overflow-y']) { node.style.setProperty('overflow-y', 'visible', 'important'); }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style.setProperty('overflow', 'visible', 'important');
    htmlNode.style.setProperty('overflow-x', 'visible', 'important');
    htmlNode.style.setProperty('overflow-y', 'visible', 'important');

})();
