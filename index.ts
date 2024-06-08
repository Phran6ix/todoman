import { Command } from "commander"
import fs from "fs"

const program = new Command()

program
	.option("-a, --add <type>", "add a new task to list")
	.option("-ls, --list_all", "display all current tasks")
	.option("-l, --list", "display all uncompleted tasks")

program.parse(process.argv)
let option = program.opts()
if(option.add) console.log(option.add)
console.log(option)

