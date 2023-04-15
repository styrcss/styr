# Styr

`/stɪ́əɾ/`

[![pipeline status][pipeline]][commit] [![npm version][version]][npm]

[![Screenshot](doc/img/screenshot-thumb.png)](
https://gitlab.com/grauwoelfchen/styr/raw/trunk/doc/img/screenshot.png)

```txt
 ____  _
/ ___|| |_ _   _ _ __
\___ \| __| | | | '__|
 ___) | |_| |_| | |
|____/ \__|\__, |_|
           |___/

Styr; STYlish css framewoRk
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

### Styles

* [Button](https://grauwoelfchen.gitlab.io/styr/button.html)
* [Form](https://grauwoelfchen.gitlab.io/styr/form.html)
* [Grid](https://grauwoelfchen.gitlab.io/styr/grid.html)
* [Label](https://grauwoelfchen.gitlab.io/styr/label.html)
* [Table](https://grauwoelfchen.gitlab.io/styr/table.html)
* [Text](https://grauwoelfchen.gitlab.io/styr/text.html)
* [Typography](https://grauwoelfchen.gitlab.io/styr/typography.html)


### Components

* [Box](https://grauwoelfchen.gitlab.io/styr/box.html)
* [Breadcrumb](https://grauwoelfchen.gitlab.io/styr/breadcrumb.html)
* [Menu](https://grauwoelfchen.gitlab.io/styr/menu.html)
* [Message](https://grauwoelfchen.gitlab.io/styr/message.html)
* [Modal](https://grauwoelfchen.gitlab.io/styr/modal.html)
* [Pagination](https://grauwoelfchen.gitlab.io/styr/pagination.html)
* [Dropdown](https://grauwoelfchen.gitlab.io/styr/dropdown.html)
* [Sidebar](https://grauwoelfchen.gitlab.io/styr/sidebar.html)


## Documentation

https://grauwoelfchen.gitlab.io/styr


## Development

### Requirements

* Node.js `>= 18.15.0`

### Setup

Use [nodenv](https://github.com/nodenv/nodenv) etc. and see `.node-version`.

### Document

```zsh
: open local document
% xdg-open doc/index.html
```

### Lint

```zsh
: check gulpfile.js
% npm install -g eslint
% eslint gulpfile.js
```

### Build

```zsh
% npm install -g gulp-cli

% gulp build
% NODE_ENV=production gulp build
```


## License

This program is free software: you can redistribute it and/or modify it
under the terms of the MIT License.


See [LICENSE](LICENSE).


```txt
Styr
Copyright (c) 2017-2018 Yasuhiro Asaka
```


[pipeline]: https://gitlab.com/grauwoelfchen/styr/badges/trunk/pipeline.svg
[commit]: https://gitlab.com/grauwoelfchen/styr/commits/trunk
[version]: https://img.shields.io/npm/v/styr.svg
[npm]: https://www.npmjs.com/package/styr
