FROM node:9.9.0-alpine

RUN set -x \
        && npm install uglify-js get-stdin -g \
        && export NODE_PATH=$(npm root --quiet -g)

ENTRYPOINT /usr/local/lib/node_modules/uglify-js/bin/uglifyjs \
        | NODE_PATH=$(npm root --quiet -g) node --eval \
            'const getStdin = require("get-stdin"); getStdin().then(str => { console.log("javascript:" + encodeURIComponent(str)); });'
