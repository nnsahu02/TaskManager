const listModel = require('../Models/listModel')
const taskModel = require('../Models/taskModel')

const createTaskList = (req, res) => {
    try {
        console.log("Nije kr")

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const createTask = (req, res) => {
    try {
        console.log("Nije kr")
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const taskList = (req, res) => {
    try {
        console.log("Nije kr")
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { createTaskList, createTask, taskList }