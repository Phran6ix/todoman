"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToTask = void 0;
const task_action_1 = require("../task/task_action");
class AddToTask {
    constructor() {
        this.tasks = new task_action_1.TaskActions();
    }
    AddToTask(task) {
        const taskExist = this.tasks.GetATask({ title: task.title });
        if (taskExist) {
            console.error("Task with this title already exist");
            return;
        }
        this.tasks.AddToTask(task);
        console.log(`Task ${task.title} has been added to list successfully`);
        return;
    }
}
exports.AddToTask = AddToTask;
