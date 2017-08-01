# Styr

`/stɪ́əɾ/`

[![build status](
https://gitlab.com/grauwoelfchen/styr/badges/master/build.svg)](
https://gitlab.com/grauwoelfchen/styr/commits/master)

[![Screenshot](doc/img/screenshot-thumb.png)](
https://gitlab.com/grauwoelfchen/styr/raw/master/doc/img/screenshot.png)

```txt
  ()
  /\_|_        ,_
 /  \|  |   | /  |
/(__/|_/ \_/|/   |_/
           /|
           \|

Styr; STYlish css libRary
```

## Repository

https://gitlab.com/grauwoelfchen/styr


## Dependencies

* [normalize.css](https://github.com/necolas/normalize.css)


## Install

```zsh
% npm install --save styr
```


## Features

See `doc/index.html`

* Box
* Breadcrumb
* Button
* Form
* Grid
* Label
* Menu
* Message
* Table
* Typography


## Development

### Setup

```zsh
: e.g. use nodeenv
% python3.5 -m venv venv
% source venv/bin/activate
(venv) % pip install --upgrade pip setuptools
(venv) % pip install nodeenv
(venv) % nodeenv -p --node=7.10.1

(venv) % npm i -g npm
(venv) % npm i
```

### Style check

```zsh
: check gulpfile.js
% npm install -g eslint
% eslint gulpfile.js
```

### Build

```zsh
: build assets
% npm install -g gulp-cli
% gulp
```


## License

Styr; Copyright (c) 2017 Yasuhiro Asaka

This program is free software: you can redistribute it and/or modify it
under the terms of the MIT License.

See [LICENSE](LICENSE).
