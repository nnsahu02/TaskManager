const listModel = require('../Models/listModel')
const taskModel = require('../Models/taskModel')

const createTaskList = async (req, res) => {
    try {
        const { name, description, active } = req.body

        const createTaskList = await listModel.create(req.body)

        return res.status(201).send({ status: true, data: createTaskList })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const createTask = async (req, res) => {
    try {
        const { taskName, description, dueDate, period, periodType, taskListId } = req.body

        const isDueDate = new Date(dueDate.split('-').reverse().join('-'));

        const endOfPeriod = new Date(`${period} 23:59:59`);
        if (isDueDate <= endOfPeriod) {
            throw new Error(`Due date must be after end of period for ${periodType}`);
        }

        const createTask = await taskModel.create(req.body)

        return res.status(201).send({ status: true, data: createTask })

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