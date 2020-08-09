# Groupomania

Seventh and last project in the brand new OpenClassrooms web developer course.

**Groupomania** is a group specializing in mass distribution, the objective is the development of an **internal social network** for **Groupomania** employees. The purpose of this tool is to facilitate interactions between colleagues.

The backend part will be carried out with **Api platform** integrated into **Symfony 4** and **React** for the frontend part.

## Installation

### Backend

**To be able to launch the API, you will need [Composer](https://getcomposer.org/) and the [Symfony CLI](https://symfony.com/download)**

1. Install dependencies with Composer
       
        composer install
        
2. Create a new '.env.local' file on the same model as '.env' with your own information, especially for the DATABASE_URL

        # For an SQLite database, use: "sqlite:///%kernel.project_dir%/var/data.db"
        # For a PostgreSQL database, use: "postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=11&charset=utf8"
        DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7
        
3. You can now update your database with migrations and retrieve a set of fake data to test the application

        php bin/console doctrine:database:create
        php bin/console doctrine:migrations:migrate
        php bin/console doctrine:fixtures:load
        
4. You can finally launch the Symfony server

        symfony serve -d
        
* You can also run the tests, but you will have to do some additional manipulations to set up the SQLite database
  
        php bin/console doctrine:database:create --env=test
        php bin/console doctrine:schema:update --env=test --force
        
* You can now start the tests

        php bin/phpunit

## Additional docs

- [Conceptual data model](docs/MCD.svg)
- [Data dictionary](docs/DD.md)
- [Kanban (Trello)](https://trello.com/b/L4uLhIF7/groupomania)
