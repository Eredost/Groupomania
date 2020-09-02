# Groupomania

Seventh and last project in the brand new OpenClassrooms web developer course.

**Groupomania** is a group specializing in mass distribution, the objective is the development of an **internal social network** for **Groupomania** employees. The purpose of this tool is to facilitate interactions between colleagues.

The backend part will be carried out with ~~**Api platform** integrated into **Symfony 4**~~ **NodeJS**, **Express** framework and **React** for the frontend part.

## Installation

#### Frontend

**You just need to install the dependencies and launch the Create-React-App server**

        > npm install
        > npm start
 ---       
### Backend

**To make the backend work, you must have the MySQL relational database manager and follow the next steps**

1. Install dependencies

        > npm install
        
2. Then, you need to add the configuration of your database in the 'config/config.json' file

        {
          "development": {
            "username": "root",
            "password": null,
            "database": "groupomania_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
          },
          ...
        }
        
3. You can now run the following commands to set up the database as well as the tables

        > npx sequelize-cli db:create
        > npx sequelize-cli db:migrate
        
4. This is optional, but if you want to quickly implement a set of fake data, you can run the following command

        > npx sequelize-cli db:seed:all
        
5. Once the dependencies installed and the database set up, you can start the server

        > npm start

## Additional docs

- [Conceptual data model](docs/MCD.svg)
- [Data dictionary](docs/DD.md)
- [Kanban (Trello)](https://trello.com/b/L4uLhIF7/groupomania)
- [Application mockups (Figma)](https://www.figma.com/file/c14uSUrFf8NtF7beqHlp48/Groupomania)
