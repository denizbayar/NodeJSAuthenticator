const express = require('express');
const router = express.Router();

const { projects } = require('../data');
const { checkUserExist,checkAdmin } = require('../basicAuth');


router.get('/', checkUserExist,checkAdmin ,(req, res)=>{
    res.json(projects)
})

router.get('/:projectId', checkUserExist, setProject,  (req, res)=>{
    res.json(req.project);
})

router.delete('/:projectId', checkUserExist, setProject, deleteProject,  (req, res)=>{
    res.status(200);
    return res.send("Project deleted...")
})

function setProject(req,res,next){
    const projectId = parseInt(req.body.projectId);
    req.project = projects.find(project=>project.id===projectId);

    if(req.project ==null){
        res.status(404)
        return res.send('Project not found!');
    }
    next();
}

function deleteProject(req,res,next){
    const {userId,projectId} = req.body;
    const isOwner = projects.find(project=>project.id == projectId && project.creatorId==userId);

    if(isOwner) return next();
    res.status(401);
    return res.send("Only the creator can delete the project.")
}

module.exports = router;