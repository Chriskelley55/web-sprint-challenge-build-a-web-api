// Write your "projects" router here!
const express = require('express');
const router = express.Router();
const { validateUserId, validatePost, allComplete, } = require('./projects-middleware');
const Project = require('./projects-model');

router.get('/', async (req, res, next) => {
    try {
        const project = await Project.get()
        res.status(200).json(project)
    } catch(err){
        next(err)
    }
})

module.exports = router