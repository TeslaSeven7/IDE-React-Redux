import ButtonTab from './ButtonTab';
import CodeTab from './CodeTab';
import ResultTab from './ResultTab';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function () {
	const [leftWidth, setLeftWidth] = useState(1300);
	const [isResizing, setIsResizing] = useState(true);

	const minWidth = 500;

	const handleMouseDown = (e) => {
		setIsResizing(true);

		e = e || window.event;
		pauseEvent(e);
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};
	function pauseEvent(e) {
		if (e.stopPropagation) e.stopPropagation();
		if (e.preventDefault) e.preventDefault();
		e.cancelBubble = true;
		e.returnValue = false;
		return false;
	}
	const handleMouseMove = (e) => {
		if (!isResizing) return;
		const deltaX = e.clientX - leftWidth - 165;
		const newWidth = leftWidth + deltaX;
		if (newWidth >= minWidth && newWidth <= window.innerWidth - minWidth) {
			setLeftWidth(newWidth);
		}
	};
	const handleMouseUp = () => {
		setIsResizing(true);
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	};

	const tabs = useSelector((state) => state.tabs);
	console.log(tabs);
	const [tabIndex, setTabIndex] = useState(tabs[0].id);
	return (
		<div className='flex grow'>
			<div className='grow flex flex-col w-[175px] shrink-0 text-white border-r border-gray text-lef'>
				{tabs.map((tab) => (
					<ButtonTab
						key={tab.id}
						id={tab.id}
						toggleTab={(id) => setTabIndex(id)}
						imgURL={tab.imgURL}
						buttonContent={tab.buttonContent}
					/>
				))}
			</div>
			<div className='w-full flex grow relative bg-zinc'>
				<div className='resize-container flex text-white min-h-screen '>
					<div
						className='left'
						style={{ width: `${leftWidth}px` }}>
						<CodeTab
							id={tabIndex}
							code={tabs.find((obj) => obj.id === tabIndex).code}
						/>
					</div>
					<div
						className={`handle ${
							isResizing ? 'resizing' : ''
						} w-[25px] border-s border-e border-gray cursor-col-resize	flex items-center`}
						onMouseDown={handleMouseDown}>
						<div className=' h-[25px] w-full flex flex-row justify-around px-1'>
							<div className='h-full w-[2px] bg-gray'></div>
							<div className='h-full w-[2px] bg-gray'></div>
							<div className='h-full w-[2px] bg-gray'></div>
						</div>
					</div>
					<div
						className='right'
						style={{ width: `calc(100% - ${leftWidth}px)` }}>
						<ResultTab />
					</div>
				</div>
			</div>
		</div>
	);
}
