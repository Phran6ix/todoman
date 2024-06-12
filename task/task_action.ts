import { readFileSync, writeFileSync } from "fs"
import { GetATaskFilter, TaskInterface } from "./task.interface"
import path from "path"

export class TaskActions {
	private path: string
	constructor() {
		this.path = path.join(__dirname + "/tasks.json")
	}
	GetAllTask(): TaskInterface[] {
		const file = readFileSync(this.path, "utf8")
		return JSON.parse(file)
	}

	GetATask(filter: GetATaskFilter): undefined | TaskInterface {
		const tasks = this.GetAllTask()
		let check: "title" | "id"
		let checkAgainst: string | number
		if (filter.id) {
			check = "id"
			checkAgainst = filter.id
		}
		if (filter.title) {
			check = "title"
			checkAgainst = filter.title
		}
		return tasks.find(
			task => task[check] == checkAgainst
		)
	}

	AddToTask(task: Omit<TaskInterface, "id">) {
		const data = readFileSync(this.path, "utf8")

		const parsedData = JSON.parse(data)

		parsedData.push({
			...task,
			id: parsedData.length + 1,
		})

		writeFileSync(this.path, JSON.stringify(parsedData), "utf8")
		return
	}
}

