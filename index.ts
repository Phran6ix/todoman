#!/usr/bin/env ts-node

import { Command } from "commander"
import { ListTask } from "./list_tasks/"
import { TaskInterface } from "./task/task.interface"
import { AddToTask } from "./add_to_tasks/add_to_task"
const program = new Command()

program
	.option("-a, --add <type...>", "add a new task to list")
	.option("-ls, --list_all", "display all current tasks")
	.option("-l, --list", "display all uncompleted tasks")
	.version("0.0.1")

program.parse(process.argv)
let option = program.opts()

const processOptions = function(args: any) {

	if (args.add) {
		if (args.add.length > 2) {
			console.log("Can only take 2 argument, title and comment")
			return
		}

		const taskObject: Omit<TaskInterface, "id"> = {
			title: args.add[0],
			comment: args.add[1],
			dateAdded: new Date(),
			completed: false
		}
		new AddToTask().AddToTask(taskObject)

	}
	if (args.list_all) {
		const listTask = new ListTask()
		console.log(listTask.GetAllTasks())
	}
}

processOptions(option)
