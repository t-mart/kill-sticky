FROM node:current-alpine

WORKDIR /build/kill-sticky

RUN set -x \
	&& mkdir /build/node_modules \
        && npm install -g uglify-js mustache \
        && npm install get-stdin

ENTRYPOINT uglifyjs <src/kill-sticky.js \
        | node src/bookmarkletify.mjs \
        | mustache - src/README.mustache.md > README.md
