// import mysql, { Connection } from 'mysql'
import { Sequelize } from 'sequelize'
import { AppConfigs } from '@config/index'

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   port: 3306,
//   password: 'thangtran',
//   database: 'trip_finder',
// })

export class Database {
  // static connection: Connection = connection

  static sequelize = new Sequelize(
    AppConfigs.DATABASE_NAME as string,
    AppConfigs.DATABASE_USER as string,
    AppConfigs.DATABASE_PASSWORD, {
      host: AppConfigs.DATABASE_HOST,
      dialect: 'mysql',
    })

  static async createConnection() {
    try {
      await Database.sequelize.authenticate()
      console.log('Connected!')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
      throw error
    }
  }

  static async closeConnection() {
    await Database.sequelize.close()
  }
}
