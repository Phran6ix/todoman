import { AddToTask } from "./add_to_tasks"
import { ListTask } from "./list_tasks"
import { TaskInterface } from "./task/task.interface"

export const processOptions = function(args: any) {
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
