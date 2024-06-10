import { TaskActions } from "../task/task_action"

export class ListTask {
	tasks: TaskActions
	constructor() {
		this.tasks = new TaskActions()
	}
	async GetAllTasks() {
		return this.tasks.GetAllTask()
	}
}

