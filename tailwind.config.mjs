/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['"Inter"', 'sans-serif'],
				'satoshi': ['"Satoshi"', 'sans-serif']
			},
			colors: {
				'warm': '#FAF9F8',
				'coral': '#F28A6B'
			}
		},
	},
	plugins: [],
}