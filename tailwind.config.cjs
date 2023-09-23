/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			...defaultTheme.fontSize,
			'h1-d': [
				'3.5rem',
        {
          lineHeight: '4rem',
					
        },
			],
			'h2-d': [
				'3rem',
				{
					lineHeight: '4rem',
					
				},
			],
			'h3-d': [
				'1.5rem',
				{
					lineHeight: '1.75rem',
					
				}
			],
			'h1-m': [
				"2rem",
        {
          lineHeight: "2.25rem",
					
        },
			],
			'h2-m': [
				'1.25rem',
				{
					lineHeight: '1.5rem',
					
				},
			],
			'h3-m': [
				'1rem',
				{
					lineHeight: '1.125rem',
					
				}
			],
			'p1-d': [
				'1.25rem',
				{
					lineHeight: '1.625rem',
					
				},
			],
			'p0-m': ['0.75rem', { lineHeight: '1.125rem', }],
			'p2-d': ['1rem', { lineHeight: '1.25rem', }],
			'p1-m': ['1rem', { lineHeight: '1.25rem', }],
			'p2-m': ['0.875rem', { lineHeight: '1.25rem', }],
		},
		colors: {
			...defaultTheme.colors,
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
			...defaultTheme.fontFamily,
			grotesk: ['Space Grotesk', 'sans-serif'],
			inter: ['Inter', 'sans-serif']
		},
		extend: {},
	},
	plugins: [],
}
