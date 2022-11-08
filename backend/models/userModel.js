import { Sequelize } from "sequelize";
import db from "../config/connection.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});

export default Users;
