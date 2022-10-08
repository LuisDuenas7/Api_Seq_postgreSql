import { Task } from "../models/Task.js";


export const tasks=async(req,res)=>{
    try {
        const {id}=req.params;

        const tasks= await Task.findAll({
            where:{
                projectId:id,
                //attributes:['name']
            }
        })
        if(tasks.length >= 1){
            res.json(tasks)
        }else{
            res.status(404).json({"Message":"empty"})
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createTask=async(req,res)=>{
    try {
        const {id}= req.params;
        const {name,done}= req.body;
        const create=await Task.create({
            name,
            done,
            projectId:id,
        })
        res.status(201).json(create)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteTask=async(req,res)=>{
    try {
        const{idProject}=req.params;
        const{idTask}=req.params;

        const project= await Task.findOne({
            where:{
                projectId:idProject,
                id:idTask
            }
        })
        if(project){
            await Task.destroy({
            where:{
                id:idTask
            }
           })
           res.sendStatus(204)
        }else{
        res.status(404).json({"message":"Nothing to delete, Try again!!"})
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const editTask=async(req,res)=>{
    try {
        const{idProject}=req.params;
        const{idTask}=req.params;
        const{name,done}=req.body;

        const editProject=await Task.findOne({
            where:{
                projectId:idProject,
                id:idTask
            }
        })
            
        if(editProject){
            const editTask= await Task.findOne({
                where:{
                    id:idTask
                }
            })
                 
                editTask.name=name;
                editTask.done=done;
                editTask.save()     
                res.status(201).json(editTask)
                 
                 }else{
                    res.status(404).json({"Message":"Not project or task to edit, Try again!!"})
        }
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const task=async(req,res)=>{
    try {
        const{idProject}=req.params;
        const{idTask}=req.params;

        const task=await Task.findOne({
            where:{
                projectId:idProject,
                id:idTask
            }
        })
        if(!task) return res.status(404).json({"Message":"Project or Task doesnt exist, Try again!! "})
       res.json(task)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}