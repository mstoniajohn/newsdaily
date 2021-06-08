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
					className="rounded-md border-b-2 focus:outline-none border-solid border-blue-100"
					type="text"
					name="term"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					placeholder="Search news…"
				/>
				<FaSearch className="absolute bottom-1 right-1 text-blue-100" />
			</form>
		</div>
	);
}
