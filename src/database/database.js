import Sequelize from 'sequelize'




export const sequelize=new Sequelize('Project_1','postgres','Service07',{
    host: 'localhost',
    dialect:'postgres'
});

