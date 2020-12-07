// import { Model, DataTypes } from 'sequelize'
import { Model } from 'sequelize'
// import { Database } from '../database/connect'
import { HotelAttributes } from 'src/typings/Hotel'

export class Hotel extends Model<HotelAttributes> {}

// Hotel.init(
//   {
//     id: {
//       type: DataTypes.NUMBER,
//       autoIncrement: true,
//       primaryKey: true,
//       unique: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     sequelize: Database.sequelize,
//     modelName: 'Hotel',
//   }
// )
