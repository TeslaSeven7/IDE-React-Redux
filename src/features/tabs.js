import { html, css, js } from '../assets/index';
import { createSlice } from '@reduxjs/toolkit';
const initialState = [
	{
		id: 1,
		lang: 'HTML',
		imgURL: html,
		buttonContent: 'HTML',
		code: `<div>
		<h1>Editeur de code avec React</h1>
		<p>Codez directement dans votre navigateur !</p>
</div>`,
	},
	{
		id: 2,
		lang: 'css',
		imgURL: css,
		buttonContent: 'CSS',
		code: `body {
	font-family: Robot, sans-serif;
	padding: 25px;
	color: #22272e;
	background-color: #96d0f2;
}`,
	},
	{
		id: 3,
		lang: 'javascript',
		imgURL: js,
		buttonContent: 'JavaScript',
		code: `console.log('Hello World!');`,
	},
];

export const codeUpdater = createSlice({
	name: 'code-updater',
	initialState,
	reducers: {
		updateCode: (state, action) => {
			state.find((obj) => obj.id === action.payload.id).code =
				action.payload.value;
		},
	},
});

export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
