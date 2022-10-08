import Sequelize from 'sequelize'




export const sequelize=new Sequelize('First','postgres','Service07/',{
    host: 'localhost',
    dialect:'postgres'
});

