# Orchestra

Real-time traditional music game using expressjs

## Installation

1. Install [node.js and npm](https://nodejs.org/).
2. Restart cmd. Ensure node and npm is working on cmd. `npm` and `node`
3. Install [bower](http://bower.io/) with global parameter. `npm install -g bower`
4. Install [express generator](http://expressjs.com) with global parameter
`npm install -g express-generator`
5. Restart cmd. Ensure bower and express is working on cmd by running
`bower` and `express`
6. Run the following commands to update npm and bower dependencies *in the project structure*:
`bower update` and 
`npm update`
7. Install [mongodb](http://mongodb.org/).
8. Restart cmd. Ensure mongodb is active.
`mongod`

## Running

```
node bin/www
```

Each time after editing a server-side code, **don't forget to re-run this command**

## Dependency Management Structure

Just like PHP Composer

1. NPM - node package manager: server-side modules, example: mongodb connection. saved in node_modules/
2. Bower : client-side modules, example: bootstrap css. saved in public/vendor
3. package.json: server-side dependencies 
4. bower.json: client-side dependencies
5. Our custom stylesheets and javascripts : use public/javascripts and public/stylesheet/
6. DO NOT edit files in public/vendor. If you want to modify bootstrap css, for example, create new custom css in public/stylesheet, include bootstrap css and custom css
7. DO NOT edit files in node_modules.


## Application Structure

- Model-View-Controller
- `models/` the "Model", contains object-database model abstractions.
- `views/` the "View", contains presentation to clients.
- `routes/` the "Controller", contains request handler.
- `config/` global configuration connection, example: mongodb connection.


## References

- [ExpressJS Guide](http://expressjs.com/guide/routing.html)
- [Mongoose (mongodb + node)](http://mongoosejs.com/docs/guide.html)
- [Swig tags API (template engine)](http://paularmstrong.github.io/swig/docs/tags/)
- [GitHub Markdown Basics](https://help.github.com/articles/markdown-basics/)
- [PassportJS Authentication](http://passportjs.org/docs/authenticate)
- [Databinding conflict with AngularJS](https://gist.github.com/angelochen960/4188293)
- [Melisa dan Si Komo](https://www.youtube.com/watch?v=2i8acODLIxc) weleh weleh weleh weleh weleh
- Feel free to add here

## Team members

- Muhammad Yafi
- Ahmad Zaky
- Hayyu Luthfi Hanifah
- Khoirunnisa Afifah
- Choirunnisa Fatima

## License

Apache License

#### Why I use English instead of Indonesian language
Bukan buat gaya-gayaan, kalo app ini jadi lumayan bisa buat resume, and it's generic.
