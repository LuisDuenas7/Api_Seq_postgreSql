import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js"
import { Project } from "./Project.js";

export const Users= sequelize.define('Users',{
id:{
type:DataTypes.INTEGER,
primaryKey:true,
autoIncrement:true
},
name:{
type:DataTypes.STRING,
allowNull: false
},
surname:{
    type:DataTypes.STRING,
    allowNull: false
},
username:{
    type:DataTypes.STRING,
    allowNull: false
},
email:{
    type:DataTypes.STRING,
    allowNull: false
},
password:{
    type:DataTypes.STRING,
    allowNull: false
},
active:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}    
})

Users.hasMany(Project,{
    foreignKey:'idProject',
    sourceKey:'id',
    onDelete:'CASCADE'
})

Project.belongsTo(Users,{
    foreignKey:'idProject',
    targetId:'id'
})