#Angular Base

This project is aiming to provide you a sample architecture to build your angular project using grunt.
Build tasks are provided for both dev and production. It will keep your development process close to the production build to help reducing the number of defect occuring after build time.

The file injection is handled by RequireJS where folders contain manifest files.

NodeJS is used to provide you a sample proxy and a local server to access your app.

Also it provides you a localeService already built to deal with browser's locale (PolyglotJS). Just fill in your lang.json files. You can simply implement on top of it a service to refresh the locale based on user selection.

##Dependencies
####For this project to work
- AngularJS : https://angularjs.org/
- RequireJS : http://requirejs.org
- Less (write less do more) : http://lesscss.org
- Jade (simplified html) : https://github.com/jadejs/jade
- Grunt (compile + build) : http://gruntjs.com
- NodeJS (proxy + local server) : http://nodejs.org

####Optional
Just to make your life easier, we included those :
- Angular Ui Router : https://github.com/angular-ui/ui-router
- Angular Ui Bootstrap : http://angular-ui.github.io/bootstrap
- Polyglot (i18n) : http://airbnb.github.io/polyglot.js/
- Lodash : https://lodash.com/
- jQuery : http://jquery.com/
- d3 (svg manipulation, create widgets) : http://d3js.org/

##Setup
To install all required dependencies run :
```bash
$ npm install
```

If you don't already have grunt installed run :
```bash
$ sudo npm install -g grunt-cli
```

##Bower
To be implemented

##Building
Our build process uses grunt.
To build for development purpose and still have a readable compiled app run :
```bash
$ grunt default
```

To build for production and get a minified app, run :
```bash
$ grunt production
```


##Running
We provide a local node app to run your webapp against a proxy.
To run it type :
```bash
$ node node/app
```

If you want to specify a backend URL to use you can use it as follow :
```bash
$ node node/app --host <host> --port <port>
```

- `<port>` is optional. It's default value will be 8080.

Running webapp will be available at :
- `http://localhost:7000`

##Live Edit
In order for you app to take your changes into account run :
 grunt watch

It will watch all changes occuring to your files and re-build your app.
`e.g : If you modify less files, only the CSS output will be recompiled`

What ??? I'm developping JS and HTML app and I have to compile ?
This is arguable but it will keep your development closer to the production release.
DI issues will appear in development and not while continuous integration process.

##Unit Testing
TBD