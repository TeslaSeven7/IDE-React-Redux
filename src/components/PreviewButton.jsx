import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePreview } from '../features/preview';

export default function () {
	const previewData = useSelector((state) => state.preview);
	const dispatch = useDispatch();
	return (
		<button
			onClick={() => dispatch(togglePreview())}
			className='text-white border border-white py-1 px-3 rounded-md'>
			{previewData.preview ? 'Hide' : 'Show'} Preview
		</button>
	);
}
