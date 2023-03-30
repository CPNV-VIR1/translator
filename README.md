# Translator
Translator is translation app to fictional languages such as Lorem Ipsum or dwarven runes
## Dependencies
Translator requires the following dependencies:
- Node.js v18.13.0
- NPM 9.5.1
- NPX 9.5.1

Translator also requires the following npm libraries:
```json
"dependencies": {
    "express": "^4.18.2",
    "mustache-express": "^1.3.2",
    "seedrandom": "^3.0.5"
},
"devDependencies": {
    "concurrently": "^7.6.0",
    "jest": "^29.5.0",
    "supertest": "^6.3.3",
    "tailwindcss": "^3.2.7"
}
```
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
