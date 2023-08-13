/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				primary: '#2B2C2C',
				secondary:'#333333',
				third: '#F8BB10',
				button: '#2D2E2E',
				outline: '#C6C6C6'
			},
			textColor:{
				primary: '#C6C6C6',
				secondary: '#F8BB10',
				third: '#777272',
			},
			ringColor:{
				primary: '#C6C6C6',
			},
			fill:{
				primary: '#C6C6C6'
			},
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
			},
			borderColor: {
				primary: '#F8BB10'
			}
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
