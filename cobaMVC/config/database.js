const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "prominent2020",
  DB_HOST = "127.0.0.1",
  DB_NAME = ""
} = process.env;

module.exports={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "challenge4",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
