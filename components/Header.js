import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Search from './Search';
import { FaNewspaper } from 'react-icons/fa';
export default function Header() {
	return (
		<header className="flex flex-col  justify-items-center mt-4 p-2">
			<div className="flex justify-between">
				<h1 className="ml-2">
					<Link href="/">
						<a className={styles.h1}>
							<FaNewspaper />
						</a>
					</Link>
				</h1>
				<Search className="text-gray-400 ml-auto" />
			</div>

			<div className="mt-4">
				<ul className="w-64 md:w-72 grid grid-cols-3 gap-3 m-auto justify-items-center ">
					<li className="font-bold text-red-500 hover:text-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1">
						<Link href="/news/search?term=covid">
							<a className="hover:animate-bounce">Covid</a>
						</Link>
					</li>

					<li className="font-bold text-red-500 hover:text-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1">
						<Link href="/news/search?term=travel">
							<a>Travel</a>
						</Link>
					</li>
					<li className="font-bold text-red-500 hover:text-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1">
						<Link href="/news/search?term=music">
							<a>Music</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
