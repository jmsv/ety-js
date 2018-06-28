# ety-js

Node module to find the etymological origins of a word (based on [jmsv/ety-python](http://github.com/jmsv/ety-python))

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/jmsv/ety-js.svg?branch=master)](https://travis-ci.org/jmsv/ety-js)

## _UNDER DEVELOPMENT - NOT YET USABLE_

At the moment this repo is just for getting a node module up and running. This will use:

- __Node__ - JS engine
- __Rollup__ - bundler
- __Babel__ - translation to more compatible JS from ES6+
- __Yarn__ - dependency management / scripts
- __StandardJS__ - code style
- __Mocha__ - unit tests

## Development

To install dev dependencies:

```bash
yarn install --dev
```

Yarn/npm scripts listed in `package.json` include: `lint` to run standard style checks, `test` to run unit tests, `build` to build to the dist directory, and `dev` to build and watch for file changes
