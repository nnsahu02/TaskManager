const express =require("express")
const router =express.Router();
//=================================================================Importing modules================================================================>

const { createTaskList, createTask, taskList } = require('../Controller/taskController')


router.post('/api/createTaskList', createTaskList)


router.post('/api/createTask', createTask)


router.get('/api/taskList', taskList)




module.exports =router