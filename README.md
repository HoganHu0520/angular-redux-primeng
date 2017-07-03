# Hancock

## How to run
* _Dev_: `npm start`
* _Production_: `npm run build`
* _Staging_: `npm run build:staging`

## Lang
`sass` & `typescript`
## Important Dependencies
* Build Tool: `webpack@3.x`
* Frontend Framework: `angular@4.x`
* Device Touch Support: `hammerjs`
* Redux Framework: `angular-redux`, `redux`

## Folder Structure
* `config`: webpack config files
* `src`: main files
  * `components`: shared components
  * `pages`: webpages for router
  * `services`: http services & others
  * `styles`: global styles
  * `utils`: global utils
  * `./routers.ts`: routers

## Webpack Config
* `config/webpack.common.js`: Common config for project.
* `config/webpack.dev.js`: Development environment config.
* `config/webpack.prod.js`: Production environment config.

* Entries
  * polyfills: HTML5 Cross Browser Polyfills
  * vendor: Third part library
  * app: Custom code

* Alias
  * `@`: `./src`
  * `config`: `./config`

* Loader for Styles
  * `xxx.scss`: encapsulation style
  > Just support special component or special page
  * `xxx.g.scss`: global style
  > Added `<style>` tag to `index.html`, global style.
