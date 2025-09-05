import { type Player } from "@/types/Boxer"

const addGetters = (players: Player[]): Player[] => {
	return players.map((b) => ({
		...b,
		clips: b.clips ?? [],
		get age() {
			return new Date(new Date().getTime() - this.birthDate.getTime()).getFullYear() - 1970
		},
	}))
}

const playersData: Player[] = addGetters([
	{
		id: "el-mariana",
		name: "Yeimy Serrano",
		realName: "Osvaldo Palacios Flores",
		gender: "masculino",
		birthDate: new Date(1998, 6, 23),
		height: 1.95,
		age: 25,
		weight: 80.1,
		country: "mx",
		image: "/img/players/el-mariana.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda",
		reach: 168,
		socials: {
			twitch: "https://twitch.tv/elmariana",
			instagram: "https://instagram.com/elmarianaa",
			twitter: "https://twitter.com/elmarianaa",
			youtube: "https://youtube.com/elmariana",
			tiktok: "https://tiktok.com/@elmarianaa",
		},
		workout: {
			videoID: "A_EDoq70XqY",
			thumbnail: "/boxers/workoutThumbnails/el-mariana.webp",
			name: "ElMariana",
		},
		clips: [
			{
				text: "El combate lo verá mi madre. Voy a ir con todo, voy a ganar",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=W6h8FwdZR6NlmJ08&amp;clip=UgkxZSsrfj0sR_gZ802CbVtT2F9SKtj1OxKW&amp;clipt=ENnv5AUY8eTlBQ",
			},
			{
				text: "Cuanto más alto, más fácil va a ser que le entre un gancho",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=AAnuIiM4FcI4uFLu&amp;clip=Ugkx-2lQ3J2MyKiOppp0UnGVO2APKh-r4cnS&amp;clipt=EMSw5wUY3KXoBQ",
			},
		],
	},
	{
		id: "zeling",
		name: "Zeling",
		realName: "Alicia González",
		gender: "femenino",
		birthDate: new Date(1995, 10, 3),
		height: 1.71,
		weight: 57.7,
		age: 28,
		country: "es",
		image: "/img/players/zeling.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/zeling",
			instagram: "https://instagram.com/zeiing",
			twitter: "https://twitter.com/zeiing",
			youtube: "https://youtube.com/@zeling_",
			tiktok: "https://tiktok.com/@zeliing",
		},
		clips: [
			{
				text: "Soy competitiva, no me gusta perder y creo que nos enfadamos mucho",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=m3QZMHr7dagPabsw&amp;clip=Ugkx1GFvGZOaZ9z_HvOqUUNwai5fvgFPdiHX&amp;clipt=EMn88wIYief0Ag",
			},
			{
				text: "Por mi parte ya no habrá tan buen rollo como antes",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=ccy_0Me4fseLPhdD&amp;clip=UgkxvB5Kn63tTAz2oSsA8E-2Pq_lnA7nDmJF&amp;clipt=EIztngMY9MyfAw",
			},
		],
		workout: {
			videoID: "bVlV1HejQag",
			thumbnail: "/boxers/workoutThumbnails/zeling.webp",
			name: "Zeling",
		},
	},
	{
		id: "nissaxter",
		name: "Nissaxter",
		realName: "Cristina Magadán",
		gender: "femenino",
		birthDate: new Date(1994, 3, 4),
		height: 1.64,
		weight: 56,
		age: 30,
		country: "es",
		image: "/img/players/nissaxter.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/nissaxter",
			instagram: "https://instagram.com/nissaxter",
			twitter: "https://twitter.com/nissaxter",
			youtube: "https://youtube.com/nissaxter_",
			tiktok: "https://tiktok.com/@nissaxter_",
		},
		clips: [
			{
				text: "No estoy preparando excusas, no soy el xokas, si pierdo, será con dignidad",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=ly7dosYLSt4qYtTB&amp;clip=UgkxJJ3K1UB1MGsxI_WzPxyiQo-hL4YMn9KB&amp;clipt=EI73nAMY88adAw",
			},
			{
				text: "Alana, veo que eres muy bonita y cuqui, pero es que yo soy de barrio",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=yXlw1mJINtozHJh4&amp;clip=UgkxWTeqQT62-L-LYjSBofjx2i5zsxaeHCqf&amp;clipt=EJ_0qwMYs9msAw",
			},
			{
				text: "Una cosa es entrenar en gimnasio, verse bonita, y otra, darse de ostias",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=XXuWc4c5ywxnBHIZ&amp;clip=UgkxptfPo72fI8yntHVo2UfsuyGjpmsfI3js&amp;clipt=ELTnggMY8smDAw",
			},
		],
		workout: {
			videoID: "zqatWGonjt4",
			thumbnail: "/boxers/workoutThumbnails/nissaxter.webp",
			name: "Nissaxter",
		},
	},
	{
		id: "carreraaa",
		name: "Carreraaa",
		realName: "Rodrigo Ezequiel Carrera",
		gender: "masculino",
		birthDate: new Date(2000, 9, 9),
		height: 1.65,
		weight: 59.2,
		age: 23,
		country: "ar",
		image: "/img/players/jessi.png", // <- Cambia esta ruta
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
		id: "la-cobra",
		name: "Juandi Duque",
		realName: "Lautaro Damián del Campo",
		gender: "masculino",
		birthDate: new Date(1997, 8, 8),
		height: 1.82,
		weight: 103.9,
		age: 26,
		country: "ar",
		image: "/img/players/la-cobra.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/lacobraaa",
			instagram: "https://instagram.com/lautarodelcampo",
			twitter: "https://twitter.com/lautarodeIcampo",
			youtube: "https://youtube.com/@lacobraaa",
			tiktok: "https://tiktok.com/@lacobraaa.9",
		},
		clips: [
			{
				text: "Me gusta pelear en el Bernabeu: El patio de la casa de Messi",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=lZS-HU6R57I7jz1V&amp;clip=Ugkxjm_VBOO_hEVTcaT1iIn1wkqhdSgz0PEz&amp;clipt=EIuTqwIYo4isAg",
			},
			{
				text: "Quiero que la pelea dure nueve minutos",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=7P28IxekBEnX1G1t&amp;clip=UgkxJxXzX5p5WQ-qnTCVSY_yHKLwN1mF_yRt&amp;clipt=ENGdpwIY6ZKoAg",
			},
		],
		rotate: true,
		workout: {
			videoID: "HFR0F2G71y4",
			thumbnail: "/boxers/workoutThumbnails/la-cobra.webp",
			name: "La Cobra",
		},
	},
	{
		id: "plex",
		name: "YoSoyPlex",
		realName: "Daniel Alonso Góndez",
		gender: "masculino",
		birthDate: new Date(2001, 8, 20),
		height: 1.97,
		weight: 81.9,
		age: 22,
		country: "es",
		image: "/img/players/juandi.png", // Asegúrate que esta ruta es correcta
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
		id: "alana",
		name: "Alana",
		realName: "Alana Flores",
		gender: "femenino",
		birthDate: new Date(2000, 11, 15),
		height: 1.56,
		weight: 52.8,
		age: 23,
		country: "mx",
		image: "/img/players/alana.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/alanalarana",
			instagram: "https://instagram.com/alanafloresf",
			twitter: "https://twitter.com/alanafloresf",
			youtube: "https://youtube.com/alanalarana",
			tiktok: "https://tiktok.com/@alanatwitch",
		},
		workout: {
			videoID: "FXzCBTRWouA",
			thumbnail: "/boxers/workoutThumbnails/alana.webp",
			name: "Alana",
		},
		clips: [
			{
				text: "No me siento nerviosa, sino ansiosa para que comience ya",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=HOIBR6_dVZpkcXvx&amp;clip=Ugkx0Mw7RT8n-aa7XwatTTg7zG0y8x14BMiY&amp;clipt=EKXN9wIYtJr4Ag",
			},
			{
				text: "Siento que Nissaxter viene con más motivación y a Zeling la noto con miedo",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=WT3jaBHM1cKZPSq_&amp;clip=Ugkx06ew5d2CB1oLDIc9HPOzTmR5tDi5VHi-&amp;clipt=EKvuhAMYoY6GAw",
			},
			{
				text: "Sé del combate meses antes, pero no me puse a entrenar porque soy justa y honesta",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=tVGA8PKZsOc5WM13&amp;clip=UgkxnCHow_qxDh6_zAdO5Tirg2UryjIgpNQi&amp;clipt=EImekwMYkcWTAw",
			},
		],
		rotate: true,
	},
	{
		id: "ama-blitz",
		name: "Amablitz",
		realName: "Amairani Garza Alonso",
		gender: "femenino",
		birthDate: new Date(1995, 2, 1),
		height: 1.58,
		weight: 56.2,
		age: 30,
		country: "mx",
		image: "/img/players/amablitz.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/amablitz",
			instagram: "https://instagram.com/amablitz",
			twitter: "https://twitter.com/amablitz",
			youtube: "https://youtube.com/amablitz",
			tiktok: "https://tiktok.com/@amablitz",
		},
		clips: [
			{
				text: "Si hablamos de ventajas, yo soy la que menos ha practicado de todas",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=BKaoMV8KgCglctOV&amp;clip=UgkxP_fhKdpqIa-DNHn21UofXxOS6dcJ46iH&amp;clipt=EMuOlQMYiOmVAw",
			},
			{
				text: "Voy a entrenar con Jhonny González, que es un campeón mundial",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=GhcMIvihto9VUMe4&amp;clip=Ugkx7Cx_kusf73FDmnSXKZFpkSagGjhzykoR&amp;clipt=ELz5ogMYpuGjAw",
			},
		],
		rotate: true,
	},
	{
		id: "agustin-51",
		name: "Agustin51",
		realName: "José Agustín Peréz Nuñéz",
		gender: "masculino",
		birthDate: new Date(2000, 10, 18),
		height: 1.69,
		weight: 59.6,
		age: 23,
		country: "es",
		image: "/img/players/agustin51.webp", // Asegúrate que esta ruta es correcta
		guard: "Izquierda", // encontrado
		reach: 168, // No encontrado
		socials: {
			twitch: "https://twitch.tv/agustin51",
			instagram: "https://instagram.com/imagus51",
			twitter: "https://twitter.com/ImAgus51",
			youtube: "https://youtube.com/Agustin5111",
			tiktok: "https://tiktok.com/@agustin51",
		},
		clips: [
			{
				text: "Después del combate, nos podemos dar un abrazo porque lo importante es dar un buen ejemplo",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=ZDk9wPbAuoBtWMzX&amp;clip=UgkxJszPGolZaON3QjSuzzh5TP2luW9qLX4W&amp;clipt=EKerzQEY5IXOAQ",
			},
			{
				text: "Siento que soy un chaval con mucha energía, pero cuando me ponen la mano encima, me caliento",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=1rqjV4PxDUxC7rko&amp;clip=UgkxRZ3cq1lEgLDe-NizURNpwN3vPxowiITS&amp;clipt=EI3L0AEY97LRAQ",
			},
			{
				text: "Si a mi me tienen que nerfear en los torneos por algo será, espero no me nerfeen en la velada",
				url: "https://www.youtube.com/embed/ct0Hr6zYZGU?si=-M2nhK1GQwhv_UqB&amp;clip=UgkxHCkkSU67P09o20vM1ZCrohVvOYDmVIh2&amp;clipt=EIjy0QEYmcfSAQ",
			},
		],
	},
	{
		id: "guanyar",
		name: "Guanyar",
		realName: "Diego Iglesias",
		gender: "masculino",
		birthDate: new Date(1998, 8, 28),
		height: 1.9,
		weight: 109.2,
		age: 26,
		country: "es",
		image: "/img/players/yeimy.png", // Asegúrate que esta ruta es correcta
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
])

export const PLAYERS: Player[] = playersData
export const BOXERS: Player[] = playersData // Compatibilidad con componentes antiguos
