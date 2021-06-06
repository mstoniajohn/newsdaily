import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Search from './Search';
import { FaNewspaper } from 'react-icons/fa';
export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<a className={styles.h1}>
					<FaNewspaper />
				</a>
			</Link>
			<Search />

			<div className="mt-4 mb-0">
				<ul>
					<li>
						<Link href="/">
							<a>Top News</a>
						</Link>
					</li>
					<li>
						<Link href="/news/search?term=covid">
							<a>Covid-19</a>
						</Link>
					</li>
					<li>
						<Link href="/news/search?term=music">
							<a>Music</a>
						</Link>
					</li>
					<li>
						<Link href="/news/search?term=travel">
							<a>Travel</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
