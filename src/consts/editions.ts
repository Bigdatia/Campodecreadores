export interface Edition {
	id: string
	name: string
	year: number
	poster: string
	url: string
}

export const EDITIONS: Edition[] = [
	{
		id: "1",
		name: "Edición Girón",
		year: 2025,
		poster: "/img/posters/campo-1.webp", // Asegúrate que esta ruta es correcta
		url: "https://www.youtube.com/watch?v=Ip2UTi20Sls&list=PL3WebiscW1KD9lcy_SFSigFZVa28x1sEw",
	},
	{
		id: "2",
		name: "Edición PolaFest",
		year: 2025,
		poster: "/img/posters/pola-fest.webp", // Asegúrate que esta ruta es correcta
		url: "https://www.youtube.com/@campo-de-creadores/videos",
	},
]
