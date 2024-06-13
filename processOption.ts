import { AddToTask } from "./add_to_tasks"
import { ListTask } from "./list_tasks"
import { TaskActions } from "./task"
import { TaskInterface } from "./task/task.interface"

const listTask = new ListTask()
export const processOptions = function(args: any) {
	switch (Object.keys(args)[0]) {
		case "add":
			console.log(args)
			processAdd(args.add)
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

function processAdd(args: string[]) {
	let fetchTitleAndComment = args.map((arg: string) => {
		const argSplit = arg.split("-")
		return {
			title: argSplit[0],
			comment: argSplit[1]
		}
	})
	fetchTitleAndComment.forEach((arg) => {
		let { title, comment } = arg
		const taskObject: Omit<TaskInterface, "id"> = {
			title,
			comment,
			dateAdded: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`
			,
			completed: false
		}
		console.log(taskObject)
		new AddToTask().AddToTask(taskObject)
	})
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
	const allTask = listTask.GetAllTasks()
	let newTasks: TaskInterface[] = allTask.map(task => {
		if (task.id == +id) {
			return { ...task, completed: true }
		}
		return task
	})

	new TaskActions().WriteTasks(newTasks)
}
