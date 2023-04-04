# Translator
Translator is translation app to fictional languages such as Lorem Ipsum or dwarven runes
## Dependencies
Translator requires the following dependencies:
- Node.js v18.13.0
- NPM 9.5.1
- NPX 9.5.1

The npm dependencies can be found in the package.json file under `dependencies`
## Installation
To install translator, clone it locally and install the NPM libraries
```shell
$ git clone git@github.com:CPNV-RIA1/translator.git
$ cd translator
$ npm install
```
## Configuration
In order for translator to work, a configuration file is required. An example 
configuration file can be found in `/config/`. Here is an example of what the
configuration files might look like:
### Development configuration file
- `/config/development.js`
```javascript
module.exports = {
    Host: {
        ip: '127.0.0.1',
        port: 8080
    },
    Logger: {
        debug: true
    }
}
```
### Production configuration file
- `/config/production.js`
```javascript
module.exports = {
    Host: {
        ip: '127.0.0.1',
        port: 80
    },
    Logger: {
        debug: false
    }
}
```
## Running
The project can be run in different states, those being: development & production.
- Development enables logging, debugging tools and tailwind css assets recompilation.
- Production disables logging, debugging tools and compiles assets at startup
### Running in dev
```shell
$ npm run dev
```
### Running in prod
```shell
$ npm run prod
```
### Tests
A series of test is included in the project. They are located in `/tests/`.
To run these tests, execute this command.
```shell
$ npm test
```
## How to collaborate
In order for you to collaborate to this project, fork this repository and work of said fork.
During your development please use the [naming conventions](https://github.com/CPNV-RIA1/translator/wiki/Project-structure#naming-conventions) in your code as described in our wiki.
Make sure that you also use the [branch and commit strategies](https://github.com/CPNV-RIA1/translator/wiki/Project-structure#branch-and-commit-strategies).

Once you're done with what you wanted to add to the project, open a pull request to this repository,
a project manager will review it and if he/she finds it meaningful enough to add to the project, will merge it.

Lastly, keep in mind that, if the [naming conventions](https://github.com/CPNV-RIA1/translator/wiki/Project-structure#naming-conventions) and
[branch and commit strategies](https://github.com/CPNV-RIA1/translator/wiki/Project-structure#branch-and-commit-strategies)
are not respected, your pull request will be denied regardless of any benefit your might bring to this project.
## File structure
Project file structure:
```shell
translator
│   .gitignore
│   index.js
│   LICENSE
│   package-lock.json
│   package.json
│   tailwind.config.js
│
├───app
│   └───translator
│           dictionary.json
│           translator.js
│
├───config
│       development.example.js
│       production.example.js
│
├───controllers
│       indexController.js
│       translationController.js
│
├───public
│   │   favicon.ico
│   │
│   ├───images
│   │       logo.png
│   │
│   ├───js
│   │       index.js
│   │       jquery.min.js
│   │       script.js
│   │       translate.js
│   │
│   └───lang
│           de.json
│           en.json
│           fr.json
│
├───resources
│   ├───css
│   │       custom.css
│   │
│   └───views
│           index.html
│
├───routes
│       index.js
│       translate.js
│
└───tests
        translator.test.js
```
