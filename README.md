# join-us-express
Simple join us web app using express js

## Requirements
* Node.js
* MySQL

## Setup
Navigate to project folder and install dependencies

```bash
npm install
```

Run mysql cli and create the database
```bash
source schema.sql
```

## Configure
Go to app.js and specify mysql connection

```bash
let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'join_us',
    password: 'mysqlpassword'
});
```

## Run the app
Navigate to project folder and run the following
```bash
node app.js
```
Open http://localhost:8080 and try the app
