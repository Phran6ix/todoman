import { TaskActions } from "../task/task_action"

export class ListTask {
	tasks: TaskActions
	constructor() {
		this.tasks = new TaskActions()
	}

	GetAllTasks() {
		return this.tasks.GetAllTask()
	}
}

