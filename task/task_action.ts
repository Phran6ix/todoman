import fs, { readFileSync } from "fs"
import { TaskInterface } from "./task.interface"

export class TaskActions {
	private path: string
	constructor() {
		this.path = "./tasks.json"
	}
	GetAllTask() {
		const file = fs.readFileSync("./tasks.json", "utf8")
		return JSON.parse(file)
	}

	AddToTask(task: TaskInterface) {
		const data = readFileSync(this.path, "utf8")
		console.log(data)

		const parsedData = JSON.parse(data)
		parsedData.push(task)

		console.log(parsedData)
		fs.writeFileSync(this.path, JSON.stringify(parsedData), "utf8")
		return
	}
}

console.log("TTT", TaskActions)
