FROM node:current-alpine

WORKDIR /kill-sticky

RUN set -x \
        && npm install uglify-js get-stdin mustache -g

ENTRYPOINT uglifyjs <src/kill-sticky.js \
        | NODE_PATH=$(npm root --quiet -g) node src/bookmarkletify.js \
        | mustache - src/README.mustache.md > README.md
