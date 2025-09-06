import type { Player, PlayerData } from "@/types/Boxer"

const addGetters = (players: PlayerData[]): Player[] => {
	return players.map((b) => ({
		...b,
		clips: b.clips ?? [],
		get age() {
			const today = new Date()
			let age = today.getFullYear() - this.birthDate.getFullYear()
			const m = today.getMonth() - this.birthDate.getMonth()
			if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
				age--
			}
			return age
		},
	}))
}

const allPlayersData: PlayerData[] = [
	{
		id: "jessi",
		name: "Jessi Uribe",
		realName: "Rodrigo Ezequiel Carrera",
		gender: "masculino",
		birthDate: new Date(2000, 9, 9),
		height: 1.65,
		weight: 59.2,
		country: "ar",
		image: "/img/players/jessi.png",
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/carreraaa",
			instagram: "https://instagram.com/rodricarreraaa",
			twitter: "http://twitter.com/rodricarreraaa",
			youtube: "http://youtube.com/carreraaa",
			tiktok: "https://tiktok.com/@carreproroblox74",
		},
		clips: [
			{
				text: "El año pasado, la vida me cagó a trompadas y esto me vino como anillo al dedo",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=FEfEgIq0ajr1mhAj&amp;clip=UgkxtwjSORg57TZFqKsJBhUB1VqgYvL_W-cH&amp;clipt=EI_dygEY-cTLAQ",
			},
			{
				text: "Con ese bigote de Agustín me dan ganas de pegarle",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=Y_tV3VN01CdHcsJc&amp;clip=Ugkx5U4X6gOIS3cqBerhC8OmebW7fRakNqCM&amp;clipt=ENTvywEYu8fMAQ",
			},
			{
				text: "Tenemos un buen peso para que esto sea una pelea muy divertida",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=277dp_i2cC-DtBSG&amp;clip=Ugkx7iS-4hpvBT1QHGAabmfrVamnMu2IefPX&amp;clipt=ELPH2gEYmJfbAQ",
			},
		],
		rotate: true,
	},
	{
		id: "juandi",
		name: "Juandi Duque",
		realName: "Daniel Alonso Góndez",
		gender: "masculino",
		birthDate: new Date(2001, 8, 20),
		height: 1.97,
		weight: 81.9,
		country: "es",
		image: "/img/players/juandi.png",
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			instagram: "https://instagram.com/yosoyplex",
			twitter: "https://twitter.com/yosoyplex",
			youtube: "https://youtube.com/YoSoyPlex",
			tiktok: "https://tiktok.com/@yosoyplexx",
		},
		workout: {
			videoID: "svXhWZ1sZJE",
			thumbnail: "/boxers/workoutThumbnails/plex.webp",
			name: "YoSoyPlex",
		},
		clips: [
			{
				text: "No hay chance de que pierda. Soy un psicópata",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=MozNtaEPpcxOOVQv&amp;clip=UgkxwyKEwj17kL8yJ2XVPNMI4dMuq-FdjYuG&amp;clipt=EOP3-QUY--z6BQ",
			},
			{
				text: "¿Se supone que tiene que picar?",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=IKDAgh-db2KYOQGN&amp;clip=UgkxCVitcQsAn1I5wO4GlZY_kMcwLKaOI7HI&amp;clipt=EMmf7wUY4ZTwBQ",
			},
			{
				text: "Hablaré en el ring. No tengo nada que decir",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=SeS4CM-dAmsHs1uC&amp;clip=UgkxSCdNOmvFVB74IC_D56vglujXVWtVI60Q&amp;clipt=ELL72QUYvevaBQ",
			},
		],
	},

	{
		id: "yeimy-serrano",
		name: "Yeimy Serrano",
		realName: "Diego Iglesias",
		gender: "masculino",
		birthDate: new Date(1998, 8, 28),
		height: 1.9,
		weight: 109.2,
		country: "es",
		image: "/img/players/yeimy.png",
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/guanyar",
			instagram: "https://instagram.com/guanyarr",
			twitter: "https://twitter.com/guanyarr",
			youtube: "https://youtube.com/GUANYAR",
			tiktok: "https://tiktok.com/@guanyar",
		},
		clips: [
			{
				text: "Era un sueño un día subirme aquí, muchas gracias a todos por venir",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=jMTGZCedLHl9HSsS&amp;clip=UgkxMc_uxsDRteyleobjWTLU7VzlM74PVEul&amp;clipt=EMmJiwIYrtmLAg",
			},
			{
				text: "Me van a perdonar, pero creo que es el mejor combate de toda la Velada",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=tmqKR0giCuBHUFHi&amp;clip=UgkxoHOE311rgi9xvpr3WSU0k3yaMVx7N8Lm&amp;clipt=EKntjAIYi62NAg",
			},
			{
				text: "Es un rival duro y me gustó mucho, fue muy intenso desde el primer momento",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=jYx2cJ103X0MPE5r&amp;clip=UgkxRpobly-wM3CN1F8FuuMJ9Q2GLrFNHTuZ&amp;clipt=EOKXlwIY-oyYAg",
			},
		],
		rotate: true,
		workout: {
			name: "Guanyar",
			videoID: "ju-B__1NDMM",
			thumbnail: "/boxers/workoutThumbnails/guanyar.webp",
		},
	},
]

export const PLAYERS: Player[] = addGetters(allPlayersData)
export const BOXERS: Player[] = PLAYERS // Compatibilidad con componentes antiguos
