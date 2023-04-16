# Styr

[![pipeline status][pipeline]][commit] [![npm version][version]][npm]

`/stɪ́əɾ/`

Styr; STYlish css framewoRk

[![Screenshot](doc/img/screenshot-thumb.png)](
https://gitlab.com/styrcss/styr/raw/trunk/doc/img/screenshot.png)


## Repositories

* (main) https://gitlab.com/styrcss/styr
* https://github.com/styrcss/styr


## Requirements

* Node.js (>= `v18.15.0`)


## Dependencies

* [normalize.css](https://github.com/necolas/normalize.css)


## Install

```zsh
% npm install styr --save
```

## Features

See https://styr.yasha.rs/

### Styles

* [Button](https://styr.yasha.rs/button.html)
* [Form](https://styr.yasha.rs/form.html)
* [Grid](https://styr.yasha.rs/grid.html)
* [Label](https://styr.yasha.rs/label.html)
* [Table](https://styr.yasha.rs/table.html)
* [Text](https://styr.yasha.rs/text.html)
* [Typography](https://styr.yasha.rs/typography.html)

### Components

* [Box](https://styr.yasha.rs/box.html)
* [Breadcrumb](https://styr.yasha.rs/breadcrumb.html)
* [Menu](https://styr.yasha.rs/menu.html)
* [Message](https://styr.yasha.rs/message.html)
* [Modal](https://styr.yasha.rs/modal.html)
* [Pagination](https://styr.yasha.rs/pagination.html)
* [Dropdown](https://styr.yasha.rs/dropdown.html)
* [Sidebar](https://styr.yasha.rs/sidebar.html)


## Development

### Setup

Use [nodenv](https://github.com/nodenv/nodenv) etc. and see `.node-version`.

```zsh
% npm install
```

### Lint

```zsh
# check gulpfile.js
% npm run lint
```

### Build

```zsh
% npm run build
% NODE_ENV=production npm run build
```

### Documentation

```zsh
: open local document
% xdg-open doc/index.html
```


## License

This program is free software: you can redistribute it and/or modify it
under the terms of the MIT License.


See [LICENSE](LICENSE).


```txt
Styr
Copyright (c) 2017-2023 Yasuhiro Яша Asaka
```
```

[pipeline]: https://gitlab.com/styrcss/styr/badges/trunk/pipeline.svg
[commit]: https://gitlab.com/styrcss/styr/commits/trunk
[version]: https://img.shields.io/npm/v/styr.svg
[npm]: https://www.npmjs.com/package/styr
