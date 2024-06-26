
export interface TaskInterface {
	id: number
	title: string
	comment?: string
	completed: boolean
	dateAdded: string
	schedule?: Date
}

export interface GetATaskFilter {
	title?: string
	id?: number
}
