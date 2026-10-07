import { useState, useEffect } from 'react';

export default function Typewriter({text, className = ''}) {
	const [displayText, setDisplayText] = useState('');
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[index]);
				setIndex((prev) => prev+1);
			}, 200);

			return () => clearTimeout(timeout);
		}
	}, [index, text])
	return <span className={`typewriter ${className}`.trim()}>{displayText}</span>;
}
