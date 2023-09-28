import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCode } from '../features/tabs';
export default function CodeTab({ id, code }) {
	const dispatch = useDispatch();
	return (
		<>
			<textarea
				onChange={(e) => dispatch(updateCode({ id, value: e.target.value }))}
				spellCheck='false'
				className='bg-zinc text-white text-xl p-8 block h-full w-full focus:outline-none resize-none'
				value={code}></textarea>
		</>
	);
}
