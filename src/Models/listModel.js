const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('TaskList', TaskListSchema);


