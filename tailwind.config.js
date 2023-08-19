/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			spacing: {
				navbar: '300px',
			},
			colors: {
				app: {
					200: '#d3d0c2',
					400: '#78b144',
					600: '#5fb485',
				},
			},
		},
	},
	plugins: [],
}
