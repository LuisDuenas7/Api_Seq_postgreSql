import app from './app.js'
import {sequelize} from './database/database.js'
//import './models/Project.js'   Import for create models
//import './models/Task.js'      Import for create models

async function main(){
    try {
        await sequelize.sync({force:false}); //{Alter:true} Update if detect changes {force:true} Force to recreate the tables
           console.log('Successful database connection. Sequelize are running...')
       app.listen(3000)
           console.log('Server running on port 3000')
    } 
    catch (error) {
        console.error('Unable to conect to the database: ',error)
    }
    
    

}


main()
