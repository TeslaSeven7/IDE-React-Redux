import React from 'react';
import { useSelector } from 'react-redux';
export default function Preview() {
	const tabs = useSelector((state) => state.tabs);
	function getCode(lang) {
		const content = tabs.find((obj) => obj.lang === lang).code;
		return content;
	}
	const srcDoc = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>${getCode('css')}</style>
        </head>
        <body>
        ${getCode('HTML')}
        <script>${getCode('javascript')}</script>
        </body>
    </html>
    `;

	return (
		<div className=' w-full h-full bg-zinc'>
			<iframe
				className='block w-full h-full bg-white'
				srcDoc={srcDoc}
				sandbox='allow-scripts'></iframe>
		</div>
	);
}
