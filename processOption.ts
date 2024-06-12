import { AddToTask } from "./add_to_tasks"
import { ListTask } from "./list_tasks"
import { TaskInterface } from "./task/task.interface"

const listTask = new ListTask()
export const processOptions = function(args: any) {
	switch (Object.keys(args)[0]) {
		case "add":
			processAdd(args)
			break;
		case "list_all":
			processListAll()
			break;
		case "list":
			processTodayList()
			break;
		case "list_uncompleted":
			listUncompletedTask()
			break;
		case "completed_task":
			console.log("wwF", args)
			markTaskAsCompleted(args.completed_task)
			break;
		default:
			break;
	}
}

function processListAll() {
	const tasks = listTask.GetAllTasks()
		.map(
			(task) => {
				return {
					id: task.id,
					title: task.title
				}
			}
		)
	console.log(tasks)
}

function processAdd(args: any) {
	if (args.add.length > 2) {
		console.log("Can only take 2 argument, title and comment")
		return
	}

	const taskObject: Omit<TaskInterface, "id"> = {
		title: args.add[0],
		comment: args.add[1],
		dateAdded: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`
		,
		completed: false
	}
	new AddToTask().AddToTask(taskObject)
}


function processTodayList() {
	const tasks = listTask.GetAllTasks()
	let todayDate = `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`
	const todaysTaks = tasks.filter(
		(task) => task.dateAdded == todayDate && task.completed == false
	).map(
		(task) => {
			return {
				id: task.id,
				title: task.title
			}
		}
	)
	console.log(todaysTaks)
}

function listUncompletedTask() {
	const task = listTask.GetAllTasks()
		.filter(
			task => task.completed == false
		).map(
			task => {
				return {
					id: task.id,
					title: task.title
				}
			})
	console.log(task)
}

function markTaskAsCompleted(id: string) {
	console.log("INNN")
	const task = listTask.GetAllTasks().find(task => task.id == +id)
	console.log(task)
}
