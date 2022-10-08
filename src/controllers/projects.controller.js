
import {Project} from '../models/Project.js'


export const getProjects=async(req,res)=>{
  
    try {
        //throw new Error('Fatal server error ')
    const projects=await Project.findAll()
    res.json(projects)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const createProject=async (req,res)=>{
    try {
        const {name,priority,description}= req.body;
    
    const newProject= await Project.create({
        name,
        priority,
        description
    })
           res.json(newProject);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateProject=async (req,res)=>{
    try {
        const{id}=req.params;
    const project= await Project.findOne({
        where:{
            id
        }
    })
    
    if(project){
      project.set(req.body);
      await project.save();
    res.status(201).json(project)
    }else{
        return res.json({"message":"This project does exist!!!"})
    }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteProject=async(req,res)=>{
   try {
    const{id}= req.params;   
    const projectToDelete= await Project.findOne({
        where:{
            id}
    })
    if(projectToDelete){
    await Project.destroy({
        where:{
            id,
        }
       })
       res.sendStatus(204)
    }else{
        res.json({"Message":"The project that you try to delete not exist!!"})
    }

       
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
}

export const getProject=async(req,res)=>{
    try {
        const {id}= req.params;
    const project= await Project.findOne({
        where:{
            id
        }
    })
    if(project){
        res.json(project)
    }else{
        res.json({"Message":"This project not exist!!"})
    }

    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}