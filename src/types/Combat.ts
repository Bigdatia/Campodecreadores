export interface Team {
	id: string
	name: string
	captainId: string
	memberIds: string[]
	video: string
	url: string
}

export interface Combat {
	id: string
	title: string
	titleSize: [number, number]
	number: number
	boxers: string[]
	video: string
	teams?: string[]
}
