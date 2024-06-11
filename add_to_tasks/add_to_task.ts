import { TaskInterface } from "../task/task.interface";
import { TaskActions } from "../task/task_action";

export class AddToTask {
	tasks: TaskActions
	constructor() {
		this.tasks = new TaskActions()
	}

	AddToTask(task: Omit<TaskInterface, "id">) {
		const taskExist = this.tasks.GetATask({ title: task.title })
		if (taskExist) {
			console.error(
				"Task with this title already exist"
			)
			return
		}
		this.tasks.AddToTask(task)
		console.log(
			`Task ${task.title} has been added to list successfully`
		)
		return
	}
}
