export interface Clip {
	text: string
	url: string
}

export interface Workout {
	videoID: string
	thumbnail: string
	name: string
}

export interface PlayerData {
	id: string
	name: string
	realName: string
	gender: "masculino" | "femenino"
	birthDate: Date
	height: number
	weight: number
	country: string
	image: string
	guard: string
	reach: number
	socials: Record<string, string>
	workout?: Workout
	clips?: Clip[]
	rotate?: boolean
}

export interface Player extends PlayerData {
	clips: Clip[]
	readonly age: number
}
