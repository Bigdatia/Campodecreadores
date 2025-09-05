// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://www.campodecreadores.com/", // Production URL.
	description:
		"Web Oficial de Campo de Creadores, evento deportivo de streamers y creadores de contenido.",
	type: "website",
	image: {
		url: "/c.png", // Usando el logo local para la imagen OG
		alt: "Campo de Creadores",
		width: 512, // Asumiendo un tamaño cuadrado para el logo
		height: 512,
	},
	siteName: "Campo de Creadores",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Campo de Creadores",
	short_name: "Campo de Creadores",
	description:
		"Web Oficial de Campo de Creadores, evento deportivo de streamers y creadores de contenido.",
	theme_color: "#d5ff00",
	background_color: "#d5ff00",
	display: "fullscreen",
	icons: [
		{
			src: "/c.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/c.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/c.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}
