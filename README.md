# kill-sticky

## Background

Alisdair McDiarmid wrote this at his [Kill sticky headers](https://alisdair.mcdiarmid.org/kill-sticky-headers/) 
bookmarklet page:

> There is currently a trend for using sticky headers on websites. There's even 
[a sticky header web startup](http://www.hellobar.com/).

> I hate sticky headers. I want to kill sticky headers.

I could not agree more.

## Installation

Make a new bookmark (on your bookmark bar) with the following URL:

    javascript:(function()%7B(function()%7Bvar%20i%2Celements%3Ddocument.querySelectorAll(%22body%20*%22)%3Bfor
    (i%3D0%3Bi%3Celements.length%3Bi%2B%2B)%7Bif(getComputedStyle(elements%5Bi%5D).position%3D%3D%3D%22fixed%22)
    %7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%7D%7D%7D)()%3Bdocument.querySelector(%22body%22).style
    .overflow%3D%22visible%22%7D)()%3B%0A

## Why a new version?
McDiarmid's bookmarklet works in most scenarios. He targets the removal of sticky nav elements at the sides of the 
viewport.

But the latest trend I've seen is for websites to pop up sticky modals **and disable scrolling** (usually for 
promotion when you move your mouse off the page). So, that's why I wrote this kill-sticky: It removes fixed 
elements **and restores your scrollbar** so you can go back to what you were doing.


## How the bookmarklet works

See the [Kill sticky headers](https://alisdair.mcdiarmid.org/kill-sticky-headers/) bookmarklet page for info
on how fixed elements are removed.

Here, however, is how this bookmarklet restores scrolling

    (function () {
      // original kill-sticky code 
      // ...
      
      
      // restore scrolling
      document.querySelector('body').style.overflow = 'visible';
    })();

## Contributing

The only real gotcha here is that we're creating a bookmarklet, so the link created above needs to be minified to a 
single line and URL encoded. 
