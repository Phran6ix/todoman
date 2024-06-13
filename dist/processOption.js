"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOptions = void 0;
const add_to_tasks_1 = require("./add_to_tasks");
const list_tasks_1 = require("./list_tasks");
const task_1 = require("./task");
const listTask = new list_tasks_1.ListTask();
const processOptions = function (args) {
    switch (Object.keys(args)[0]) {
        case "add":
            processAdd(args.add);
            break;
        case "list_all":
            processListAll();
            break;
        case "list":
            processTodayList();
            break;
        case "list_uncompleted":
            listUncompletedTask();
            break;
        case "completed_task":
            markTaskAsCompleted(args.completed_task);
            break;
        default:
            break;
    }
};
exports.processOptions = processOptions;
function processListAll() {
    const tasks = listTask.GetAllTasks()
        .map((task) => {
        return {
            id: task.id,
            title: task.title
        };
    });
    console.log(tasks);
}
function processAdd(args) {
    let fetchTitleAndComment = args.map((arg) => {
        const argSplit = arg.split("-");
        return {
            title: argSplit[0],
            comment: argSplit[1]
        };
    });
    fetchTitleAndComment.forEach((arg) => {
        let { title, comment } = arg;
        const taskObject = {
            title,
            comment,
            dateAdded: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            completed: false
        };
        new add_to_tasks_1.AddToTask().AddToTask(taskObject);
    });
}
function processTodayList() {
    const tasks = listTask.GetAllTasks();
    let todayDate = `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    const todaysTaks = tasks.filter((task) => task.dateAdded == todayDate && task.completed == false).map((task) => {
        return {
            id: task.id,
            title: task.title
        };
    });
    console.log(todaysTaks);
}
function listUncompletedTask() {
    const task = listTask.GetAllTasks()
        .filter(task => task.completed == false).map(task => {
        return {
            id: task.id,
            title: task.title
        };
    });
    console.log(task);
}
function markTaskAsCompleted(id) {
    const allTask = listTask.GetAllTasks();
    let newTasks = allTask.map(task => {
        if (task.id == +id) {
            return Object.assign(Object.assign({}, task), { completed: true });
        }
        return task;
    });
    new task_1.TaskActions().WriteTasks(newTasks);
}
