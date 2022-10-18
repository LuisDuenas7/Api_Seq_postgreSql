import app from './app.js'
import {sequelize} from './database/database.js'
//import './models/Project.js'  
//import './models/Users.js'
//import './models/Task.js'      

async function main(){
    try {
        //await sequelize.sync({force:true}); //{Alter:true} Update if detect changes {force:true} Force to recreate the tables
           console.log('Successful database connection. Sequelize are running...')
       app.listen(3000)
           console.log('Server running on port 3000')
    } 
    catch (error) {
        console.error('Unable to conect to the database: ',error)
    }
    
    

}


main()
