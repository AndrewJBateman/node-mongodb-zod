# :zap: Node MongoDB Zod

* Node.js + Express used with the [zod library](https://github.com/colinhacks/zod) to interract with a MongoDB database
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-mongodb-zod?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-mongodb-zod?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-mongodb-zod?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-mongodb-zod?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Controllers: One for each resource: product, session and user
* Middleware: there are three - to deserialize user, require user & validate resource
* Models: one for each resource: product, session and user
* Schema: used by validate resource middleware
* Utils: utilities for connection to the database, jwt & logger
* Data flow: HTTP endpoint <-> ( Middleware ) <-> Controller <-> Service <-> Database
* [mongoose v6](https://mongoosejs.com/docs/migrating_to_6.html) legacy type HookNextFunction has been removed
* [mongoose queries with the lean option](https://mongoosejs.com/docs/tutorials/lean.html) used to get results faster
* [lodash omit](https://lodash.com/docs/4.17.15#omit) used to return a copy of the object minus the filtered item - user password in this case
* [zod library](https://github.com/colinhacks/zod) used for data validation with automatic typing, as the code uses typescript data types

## :camera: Screenshots

![Image](./imgs/postman.png)

## :signal_strength: Technologies

* [Node.js v14](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [Express v4](https://www.npmjs.com/package/express) web framework for node
* [MongoDB Atlas](https://www.mongodb.com/es/cloud/atlas) cloud database service
* [mongoose v6](https://mongoosejs.com/) mongodb object modelling for node.js
* [pino v7](https://www.npmjs.com/package/pino) very low overhead Node.js logger.
* [dayjs v1](https://www.npmjs.com/package/dayjs) minimalist JavaScript library that parses, validates, manipulates & displays dates and times
* [zod v3](https://www.npmjs.com/package/zod) TypeScript-first schema declaration and validation library. A schema can be any data type
* [JWT tokens](https://jwt.io/) using RS256 algorithm
* [nanoid](https://www.npmjs.com/package/nanoid) A tiny (130bytes), fast (2x faster than UUID), secure, URL-friendly, unique string ID generator for JavaScript. ID size is only 21 symbols

## :floppy_disk: Setup

* Install dependencies
* Create `.env` and add database credentials
* Create public & private keys using the [JWT RS256 algorithm](https://jwt.io/)
* MongoDB has to be running - I use the cloud database MongoDB Atlas instead of installing MongoDB on my hard drive
* `yarn dev` or `npm run dev` runs app in the development mode with auto-restart. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## :wrench: Testing

* Postman used to simulate HTTP endpoints
* POST Create User works, otthher functions to be tested

## :computer: Code Examples

* tba

```javascript

```

## :cool: Features - Frontend

* tba

## :clipboard: Status, Testing & To-Do List

* Status: Code complete and part tested
* To-Do: Complete Postman testing

## :clap: Inspiration

* [Build a REST API with Node.js, Express, TypeScript, MongoDB & Zod](https://www.youtube.com/watch?v=BWUi6BS9T5Y&t=198s)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com