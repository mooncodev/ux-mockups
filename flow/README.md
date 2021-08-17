# Flow

Flow is a premium admin template designed and coded by the Frontted UI Experts. With multiple dashboards, fully responsive and hundreds of ui elements Flow suits all front & backend applications.

> Your purchase includes 6 months of support (with extras available) and free updates.

## Browser support

Flow works on the last two versions of every major browser. Specifically, we test on Chrome, Firefox, Safari on Mac, Safari on iOS, IE10, IE11, Edge.

## Running the demos

Preview [Flow](http://demo.frontted.com/flow/index.html) online.

### Precompiled files

> You can find the precompiled HTML, CSS and JavaScript files from our online demo in the `dist/` directory of the downloaded package.

You can open the precompiled demo from the download package:

```bash
open dist/index.html
```

Or, start a web server:

```bash
npm run serve
```

# Development

[![npm version](https://badge.fury.io/js/theme-mix.svg)](https://badge.fury.io/js/theme-mix)

Flow includes a modern development workflow based on Webpack and laravel-mix which compiles Sass, ES6 JavaScript, handles production builds, watchers, multiple CSS themes and more. This entire workflow is contained into an installable package named `theme-mix`.

## Installation

```bash
npm install
```

> Create a `webpack.mix.js` file at the root of your project:

```js
require('theme-mix')

// Enable sourcemaps
const { mix } = require('laravel-mix')
const sourceMapsInProduction = false
mix.sourceMaps(sourceMapsInProduction)
```

> Update `package.json` with the workflow:

```json
"scripts": {
  "development": "cross-env NODE_ENV=development webpack --progress
--hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "production": "cross-env NODE_ENV=production webpack --progress
--hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "watch": "cross-env NODE_ENV=development webpack --watch --progress
--hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
},
```

## Workflow

### Build

> Development build:

```bash
npm run development
```

> Production build (includes extra minification, optimizations and cleanup):

```bash
npm run production
```

### Watch

> Start a web server and automatically rebuild your changes as you make them:

```bash
npm run watch
```

### Tasks

> Run specific tasks

```bash
npm run development -- --env.run [html|js|sass|copy|clean]
```

## Options

> Create a `theme-mix.yaml` file at the root of your project. These are the default configuration options, except `copy` which by default is an empty list.

```yaml
runTasks:
  clean: true
  js: true
  copy: true
  sass: true
  html: true
enableCssThemes: false
enableCssRTL: true
copyCwd: node_modules
copyDest: dist/assets/vendor
copy:
  - bootstrap/dist/js/bootstrap.min.js
  - jquery/dist/jquery.min.js
  - popper.js/dist/umd/popper.js
  - fullcalendar/dist/fullcalendar.min.js
  - moment/min/moment.min.js
  - chart.js/dist/Chart.min.js
  - select2/dist/js/select2.full.min.js
  - dateformat/lib/dateformat.js
  - bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js
  - bootstrap-switch/dist/js/bootstrap-switch.min.js
  - morris.js/morris.min.js
  - raphael/raphael.min.js
  - owl.carousel/dist/owl.carousel.min.js
  - summernote/dist/summernote-bs4.min.js
  - dragula/dist/dragula.min.js
  - jquery-ui-dist/jquery-ui.min.js
  - datatables.net/js/jquery.dataTables.js
  - datatables.net-bs4/js/dataTables.bootstrap4.js
  - material-design-icons-iconfont/dist/fonts/*.{eot,ttf,woff,woff2}:
dist/assets/fonts/material-icons
  - summernote/dist/font/*.{eot,ttf,woff}: dist/assets/fonts/summernote
  - dom-factory/dist/*
  - material-design-kit/dist/material-design-kit.js
  - simplebar/umd/*
clean:
  - dist/**/*.html
  - dist/assets/{css,fonts,js,vendor}
sassSrc: src/sass/*.scss
cssDest: dist/assets/css
jsSrc: src/js/**/**.{js,vue}
jsDest: dist/assets/js
htmlDest: dist/[path][name].html
laravelMixOptions:
  processCssUrls: false
```

# Resources

Flow is built on top of the following libraries, so make sure you follow through their own documentation when necessary.

### Bootstrap 4

> Bootstrap is the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web. [See Bootstrap 4 website](https://getbootstrap.com/)

### Material Design Kit

> Interactive web components inspired from Material Design, using vanilla CSS, JavaScript and HTML. Provides layouts, drawers and other advanced features. [See MDK on Github](https://github.com/FrontendMatter/material-design-kit)

## Get help

> Get help directly from our team via our item comments.
