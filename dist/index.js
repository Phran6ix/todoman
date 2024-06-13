#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const processOption_1 = require("./processOption");
const program = new commander_1.Command();
program
    .version("0.0.1")
    .description("A cli-based task manager ")
    .option("-a, --add <value...>", "add a new task to list")
    .option("-ls, --list_all", "display all current tasks")
    .option("-l, --list", "display all uncompleted tasks for the day")
    .option("-lc, --list_uncompleted", "display all uncompleted tasks")
    .option("-c, --completed_task <value>", "mark a task as complete");
program.parse(process.argv);
let option = program.opts();
if (!process.argv[2]) {
    program.outputHelp();
}
(0, processOption_1.processOptions)(option);
