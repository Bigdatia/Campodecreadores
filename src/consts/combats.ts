import type { Combat, Team } from "@/types/Combat"

export const REY_DE_LA_PISTA_ID = "5-rey-de-la-pista"

export const TEAMS: Team[] = [
	{
		id: "jessi-uribe",
		name: "Jessi Uribe",
		captainId: "jessi",
		memberIds: ["jessi", "agustin-51"],
		video: "IPbkwObKdlU",
		url: "https://www.instagram.com/jessiuribe3", // Reemplaza esta URL por la que necesites
	},
	{
		id: "yeimy-serrano",
		name: "Yeimy Serrano",
		captainId: "yeimy-serrano",
		memberIds: ["guanyar", "la-cobra"],
		video: "jdchidzFY6Y",
		url: "https://www.instagram.com/yeimiserrano1/", // TODO: Reemplazar con la URL real
	},
	{
		id: "juandi-duque",
		name: "Juandi Duque",
		captainId: "juandi",
		memberIds: ["plex", "el-mariana"],
		video: "WnryYJ0k-_0",
		url: "https://www.instagram.com/eljuandiduque/", // TODO: Reemplazar con la URL real
	},
]

export const COMBATS: Combat[] = [
	{
		id: "1-agustin-51-vs-carreraaa",
		title: "Agustín 51 vs Carreraaa",
		titleSize: [500, 150],
		number: 1,
		boxers: ["agustin-51", "carreraaa"],
		video: "IPbkwObKdlU",
	},
	{
		id: "2-guanyar-vs-la-cobra",
		title: "Guanyar vs La Cobra",
		titleSize: [500, 150],
		number: 2,
		boxers: ["guanyar", "la-cobra"],
		video: "jdchidzFY6Y",
	},
	{
		id: "3-zeling-y-nissaxter-vs-alana-y-ama-blitz",
		title: "Zeling & Nissaxter vs Alana & Ama Blitz",
		titleSize: [500, 250],
		number: 3,
		boxers: ["zeling", "nissaxter", "alana", "ama-blitz"],
		teams: ["zeling-nissaxter", "alana-ama-blitz"],
		video: "WnryYJ0k-_0",
	},
]
