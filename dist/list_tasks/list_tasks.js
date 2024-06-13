"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTask = void 0;
const task_action_1 = require("../task/task_action");
class ListTask {
    constructor() {
        this.tasks = new task_action_1.TaskActions();
    }
    GetAllTasks() {
        return this.tasks.GetAllTask();
    }
}
exports.ListTask = ListTask;
