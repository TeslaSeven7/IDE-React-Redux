import Tabs from './components/Tabs';
import PreviewButton from './components/PreviewButton';

function App() {
	return (
		<div className='bg-darkzinc min-h-screen flex flex-col overflow-hidden max-h-screen'>
			<div className='px-4 py-4 border-b border-gray flex flex-items-center'>
				<div className='w-full text-start'>
					<PreviewButton />
				</div>
				<h1 className='w-full text-white text-3xl text-center font-medium'>
					IDE.al
				</h1>
				<div className='w-full flex'>
					<div className='ml-auto mr-2'>
						<div className='w-[6px] h-[6px] bg-white rounded-full my-1'></div>
						<div className='w-[6px] h-[6px] bg-white rounded-full my-1'></div>
						<div className='w-[6px] h-[6px] bg-white rounded-full'></div>
					</div>
				</div>
			</div>
			<Tabs />
		</div>
	);
}

export default App;
