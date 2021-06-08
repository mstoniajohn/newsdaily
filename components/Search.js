import { useState } from 'react';
import { useRouter } from 'next/router';
// import styles from '../styles/Search.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
	const [term, setTerm] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/news/search?term=${term}`);
		setTerm('');
	};
	return (
		<div className=" relative">
			<form onSubmit={handleSubmit}>
				<input
					className="rounded focus:border-none border-solid border-2 border-light-blue-500"
					type="text"
					name="term"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					placeholder="Search news…"
				/>
				<FaSearch className="absolute top-1 right-0 bg-light-blue-500" />
			</form>
		</div>
	);
}
