#!/usr/bin/env ts-node

import { Command } from "commander"
import { ListTask } from "./list_tasks/"
const program = new Command()

program
	.option("-a, --add <type>", "add a new task to list")
	.option("-ls, --list_all", "display all current tasks")
	.option("-l, --list", "display all uncompleted tasks")
	.version("0.0.1")

program.parse(process.argv)
let option = program.opts()
if (option.add) {
	// const li
}

if (option.list_all) {
	const listTask = new ListTask()
	console.log(listTask.GetAllTasks())
}
console.log(option)

