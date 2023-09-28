export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#171717',
			white: '#a0bac7 ',
			sky: '#36bef5',
			neutral: '#a3a3a3 ',
			zinc: '#22272e',
			darkzinc: '#1c2128',
			gray: '#444c56',
			slate: '#94a3b7',
		},
	},
	plugins: [],
};
