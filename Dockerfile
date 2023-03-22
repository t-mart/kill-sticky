FROM node:current-alpine

WORKDIR /build/kill-sticky

RUN mkdir /build/node_modules \
        && npm install -g uglify-js mustache \
        && npm install get-stdin

CMD uglifyjs <src/kill-sticky.js \
        | node src/bookmarkletify.mjs \
        | mustache - src/README.mustache.md > README.md
