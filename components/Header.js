import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Search from './Search';
export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<a className={styles.h1}>Home</a>
			</Link>
			<Search />

			<div>
				<ul>
					<li>
						<Link href="/news">
							<a>News</a>
						</Link>
					</li>
					<li>
						<Link href="/news/search">
							<a>Search </a>
						</Link>
					</li>
					<li>
						<Link href="/news">
							<a>News</a>
						</Link>
					</li>
					<li>
						<Link href="/news">
							<a>News</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
