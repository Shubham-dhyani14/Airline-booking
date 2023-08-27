
# Project Title

A brief description of what this project does and who it's for

## Clone the project on your local
Execute `npm install` on the same path as of your root directory of the downloaded project

## Setup npm script.
- Add this command to `package.json` > **scripts** key 
```
"start": "npx nodemon src/index.js" ,
```
- now use `npm start` command to start the server after adding environment variables.


## Environment Variables

- To run this project, you will need to create a `.env` file in the root directory.
- Add the following environment variables to your .env file
`Port = [port number]` e.g : `Port : 3000`

`ANOTHER_API_KEY`

add config.json in config folder and add below code as json obj
```
{
    "development": {
    "username": "root",
    "password": <your db password>,
    "database": <your db name>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```


## Setup sequelize

- install pkgs for ORM

`npm i sequelize mysql2`

`npm install --save-dev sequelize-cli`

- initialise 

`npx sequelize-cli init`

- This will create following folders

   - `config`, contains config.json file, which tells CLI how to connect with database
    - `models`, contains all models for your project
    - `migrations`, contains all migration files
seeders, contains all seed files

## Create db using sequelize 
`npx sequelize db:create` : to create DB with name mentioned in config.json

`npx sequelize model:generate --name City --attributes name:String` : to create city model

`npx sequelize db:migrate` : create table from model in db

migration attributes applies to tabels and models on js lvl.
- checkout changes on database

 ``use flight_search_db_dev``

 `show tables;`

 ` select * from cities;`