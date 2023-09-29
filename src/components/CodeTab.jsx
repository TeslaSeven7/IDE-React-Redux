import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCode } from '../features/tabs';

export default function CodeTab({ id, code }) {
	const dispatch = useDispatch();

	const [textValue, setTextValue] = useState(code);
	const [typingTimeout, setTypingTimeout] = useState(null);

	const handleCodeChange = (e) => {
		const newValue = e.target.value;
		setTextValue(newValue);

		if (typingTimeout) {
			clearTimeout(typingTimeout);
		}

		const newTypingTimeout = setTimeout(() => {
			dispatch(updateCode({ id, value: newValue }));
		}, 500);
		setTypingTimeout(newTypingTimeout);
	};

	useEffect(() => {
		setTextValue(code);
	}, [code]);

	return (
		<>
			<textarea
				onChange={handleCodeChange}
				spellCheck='false'
				className='bg-zinc text-white text-lg p-8 block h-full w-full focus:outline-none resize-none'
				value={textValue}></textarea>
		</>
	);
}
