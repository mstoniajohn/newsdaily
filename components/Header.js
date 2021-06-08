import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Search from './Search';
import { FaNewspaper } from 'react-icons/fa';
export default function Header() {
	return (
		<header className="flex flex-col items-center justify-center mt-4 md:flex-row md:justify-evenly p-2">
			<h1 className="mr-auto">
				<Link href="/">
					<a className={styles.h1}>
						<FaNewspaper />
					</a>
				</Link>
			</h1>
			<Search className="text-blue" />

			<div className="mt-4 mb-0 md:ml-auto">
				<ul className="md:grid md:grid-cols-3 items-center gap-3 flex justify-center">
					<li>
						<Link href="/news/search?term=covid">
							<a>Covid</a>
						</Link>
					</li>

					<li>
						<Link href="/news/search?term=travel">
							<a>Travel</a>
						</Link>
					</li>
					<li>
						<Link href="/news/search?term=music">
							<a>Music</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
