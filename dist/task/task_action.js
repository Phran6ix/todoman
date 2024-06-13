"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskActions = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class TaskActions {
    constructor() {
        this.path = path_1.default.join(__dirname + "/tasks.json");
    }
    GetAllTask() {
        const file = (0, fs_1.readFileSync)(this.path, "utf8");
        return JSON.parse(file);
    }
    GetATask(filter) {
        const tasks = this.GetAllTask();
        let check;
        let checkAgainst;
        if (filter.id) {
            check = "id";
            checkAgainst = filter.id;
        }
        if (filter.title) {
            check = "title";
            checkAgainst = filter.title;
        }
        return tasks.find(task => task[check] == checkAgainst);
    }
    AddToTask(task) {
        const data = (0, fs_1.readFileSync)(this.path, "utf8");
        const parsedData = JSON.parse(data);
        parsedData.push(Object.assign(Object.assign({}, task), { id: parsedData.length + 1 }));
        (0, fs_1.writeFileSync)(this.path, JSON.stringify(parsedData), "utf8");
        return;
    }
    WriteTasks(tasks) {
        return (0, fs_1.writeFileSync)(this.path, JSON.stringify(tasks), "utf8");
    }
}
exports.TaskActions = TaskActions;
