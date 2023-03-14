const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true,
        //match: /^([A-Z][a-z]{2}\s\d{4})$/
    },
    periodType: {
        type: String,
        required: true,
        enum: ['monthly', 'quarterly', 'yearly']
    },
    taskListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskList',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);

