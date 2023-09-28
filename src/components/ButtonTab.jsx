import React from 'react';

export default function ButtonTab({ id, toggleTab, buttonContent, imgURL }) {
	return (
		<button
			className='flex items-center px-5 py-2 hover:bg-gray focus:bg-gray outline-none'
			onClick={() => toggleTab(id)}>
			<img
				src={imgURL}
				alt=''
				className='me-2 w-4'
			/>
			<span>{buttonContent}</span>
		</button>
	);
}
