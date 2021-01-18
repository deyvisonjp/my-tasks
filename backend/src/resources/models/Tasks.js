const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Tasks = mongoose.model('tasks', TasksSchema);

module.exports = Tasks;