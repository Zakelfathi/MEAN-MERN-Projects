const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const createTask = asyncWrapper(async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({ newTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task found with ID: ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: taskID });
    if (!deletedTask) {
      return next(createCustomError(`No task found with ID: ${taskID}`, 404));
    }
    res.status(200).json({ deletedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) {
      return next(createCustomError(`No task found with ID: ${taskID}`, 404));
    }
    res.status(200).json({ updatedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
