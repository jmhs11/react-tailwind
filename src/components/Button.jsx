const Button = ({ text, handleClick }) => {
	return (
		<button
			className='bg-blue-500 rounded font-bold text-white p-4'
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default Button;
