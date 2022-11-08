import {Sequelize} from "sequelize";

const db = new Sequelize('userbase', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
