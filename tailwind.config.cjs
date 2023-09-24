/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'h1-d': [
				'56px',
				{
					lineHeight: '64px',

				},
			],
			'h2-d': [
				'48px',
				{
					lineHeight: '64px',

				},
			],
			'h3-d': [
				'24px',
				{
					lineHeight: '28px',

				}
			],
			'h1-m': [
				"32px",
				{
					lineHeight: "36px",

				},
			],
			'h2-m': [
				'20px',
				{
					lineHeight: '24px',

				},
			],
			'h3-m': [
				'16px',
				{
					lineHeight: '18px',

				}
			],
			'p1-d': [
				'20px',
				{
					lineHeight: '26px',

				},
			],
			'p0-m': ['12px', { lineHeight: '18px', }],
			'p2-d': ['16px', { lineHeight: '20px', }],
			'p1-m': ['16px', { lineHeight: '20px', }],
			'p2-m': ['14px', { lineHeight: '20px', }],
		},
		extend: {
			colors: {
				deepBlack: '#16160e',
				deepWhite: '#FFFFFF',
				chalk: '#FFFFFC',
				dough: '#fbfaf5',
				greyYellowGreen: '#e6eae3',
				buckwheaT: '#d4dcd6',
				sageGreen: '#97a791',
				willowGrey: '#c8d5bb',
				greySilk: '#dddcd6',
				moisture: '#c8c2be'
			},
			fontFamily: {
				grotesk: ['Space Grotesk', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			padding: {
				18: '4.5rem'
			},
			borderRadius: {
				20: '20px'
			}
		},
	},
	plugins: [],
}
