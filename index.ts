#!/usr/bin/env ts-node

import { Command } from "commander"
import { processOptions } from "./processOption"
const program = new Command()

program
	.version("0.0.1")
	.description("A cli-based task manager ")
	.option("-a, --add <value...>", "add a new task to list")
	.option("-ls, --list_all", "display all current tasks")
	.option("-l, --list", "display all uncompleted tasks for the day")
	.option("-lc, --list_uncompleted", "display all uncompleted tasks")
	.option("-c, --completed_task <value>", "mark a task as complete")

program.parse(process.argv)
let option = program.opts()

if (!process.argv[2]) {
	program.outputHelp()
}
processOptions(option)
