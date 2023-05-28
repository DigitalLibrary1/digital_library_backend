require('dotenv').config({path: '../.env.development'})

module.exports = {
  "type": process.env.TYPEORM_CONNECTION,
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "entities": [process.env.TYPEORM_ENTITIES],
  "synchronize": process.env.TYPEORM_SYNCHRONIZE === 'true',
  "migrations": ["dist/migrations/*{.ts,.js}"],
  "migrationsTableName": "migrations_typeorm",
  "migrationsRun": true
}
