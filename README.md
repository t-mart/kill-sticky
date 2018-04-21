# kill-sticky

Bookmarklet to remove sticky elements and restore scrolling to web pages!

## Background

Alisdair McDiarmid wrote at his [Kill sticky headers](https://alisdair.mcdiarmid.org/kill-sticky-headers/) 
bookmarklet page...

> I hate sticky headers. I want to kill sticky headers.

I could not agree more.

But, while McDiarmid's code has already been immensely helpful to me, I wanted to extend it to also kill of another 
recent trend: marketing modals. They also abuse `position: fixed` styling and **remove your ability to scroll with 
`overflow: hidden`**. Not cool, man.

And that's what this extension aims to address:
- Delete fixed [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) styled elements
- Change hidden [overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) styles to `auto`

## Installation

Make a new bookmark (on your bookmark bar) with the following URL:

```
javascript:(function()%7B(function()%7Bvar%20i%2Celements%3Ddocument.querySelectorAll(%22*%22)%3Bfor(i%3D0%3Bi%3Celements.length%3Bi%2B%2B)%7Bvar%20computedStyle%3DgetComputedStyle(elements%5Bi%5D)%3Bif(computedStyle.position%3D%3D%3D%22fixed%22)%7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%7Dif(computedStyle.overflow%3D%3D%3D%22hidden%22)%7Belements%5Bi%5D.style%5B%22overflow%22%5D%3D%22auto%22%7Dif(computedStyle%5B%22overflow-x%22%5D%3D%3D%3D%22hidden%22)%7Belements%5Bi%5D.style%5B%22overflow-x%22%5D%3D%22auto%22%7Dif(computedStyle%5B%22overflow-y%22%5D%3D%3D%3D%22hidden%22)%7Belements%5Bi%5D.style%5B%22overflow-y%22%5D%3D%22auto%22%7D%7D%7D)()%7D)()%3B%0A
```

![Installation of kill-sticky](out.gif)

## Usage

Every time you see a bothersome fixed position element and/or loss of scrolling functionality, click the bookmark!

This may break the page sometimes, such as deleting nav or causing scrollbars to show up where they shouldn't. If 
that happens, just reload the page.


## How the bookmarklet works

See the [Kill sticky headers](https://alisdair.mcdiarmid.org/kill-sticky-headers/) bookmarklet page for info
on how fixed elements are removed.

Here, however, is how this bookmarklet restores scrolling

```javascript
var i, elements = document.querySelectorAll('*');

for (i = 0; i < elements.length; i++) {

    var computedStyle = getComputedStyle(elements[i]);
    
    if (computedStyle.position === 'fixed') {
       elements[i].parentNode.removeChild(elements[i]);
    }
    
    // restore scrolling
    if (computedStyle.overflow === 'hidden') {
       elements[i].style['overflow'] = 'auto';
    }
// and do the same for overflow-x and overflow-y
}
```

## Building

We're creating a bookmarklet, so our code needs to be minified and URL encoded. 

Run the following the the `src/` directory:

```console
$ docker build . -t kill-sticky && docker run -i --rm kill-sticky <kill-sticky.js
```
    
_If releasing a new version, paste the output into this `README.md`._
