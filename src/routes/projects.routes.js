import {Router} from 'express'
import {getProjects,
        createProject,
        updateProject,
        deleteProject,
        getProject} from '../controllers/projects.controller.js'
import { tasks,
         createTask,
         deleteTask,
         editTask,
         task
} from '../controllers/task.controller.js';



const router= Router();

router.get('/projects',getProjects);
router.post('/projects',createProject);
router.put('/projects/:id',updateProject);
router.delete('/projects/:id',deleteProject);
router.get('/projects/:id',getProject);


router.get('/projects/:id/tasks',tasks);
router.post('/projects/:id/tasks',createTask);
router.delete('/projects/:idProject/tasks/:idTask',deleteTask)
router.put('/projects/:idProject/tasks/:idTask',editTask)
router.get('/projects/:idProject/tasks/:idTask',task)

export default router;