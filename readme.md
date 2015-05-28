# Orchestra

Real-time traditional music game using expressjs

## Installation

1. Install [node.js and npm](https://nodejs.org/).
2. Restart cmd. Ensure node and npm is working on cmd.
```
npm
```
```
node
```
3. Install [bower](http://bower.io/) with global parameter.
```
npm install -g bower
```
4. Install [express generator](http://expressjs.com).
```
npm install -g express-generator
```
5. Restart cmd. Ensure bower and express is working on cmd by running
```
bower
```
```
express
```
6. Run the following commands to update npm and bower dependencies *in the project structure*:
```
bower update
```
```
npm update
```
7. Install [mongodb](http://mongodb.org/).
8. Restart cmd. Ensure mongodb is active.
```
mongod
```

## Running

node bin/www

## Dependency Management Structure

Just like PHP Composer
1. NPM - node package manager: server-side modules, example: mongodb connection. saved in node_modules/
2. Bower : client-side modules, example: bootstrap css. saved in public/vendor
3. package.json: server-side dependencies 
4. bower.json: client-side dependencies
5. Our custom stylesheets and javascripts : use public/javascripts and public/stylesheet/
6. DO NOT edit files in public/vendor. If you want to modify bootstrap css, for example, create new custom css in public/stylesheet, include bootstrap css and custom css
7. DO NOT edit files in node_modules.

## History

TODO: Write history

## Credits

## License

Apache License

#### Why I use English instead of Indonesian language
Bukan buat gaya-gayaan, kalo app ini jadi lumayan bisa buat resume, and it's generic.