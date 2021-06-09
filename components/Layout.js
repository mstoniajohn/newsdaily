import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Layout({ title, description, children, keywords }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			<div className="w-screen sm:flex mt-4 sm:wrap-reverse">
				<main className="sm:w-3/4 w-full p-2">{children}</main>
				<aside className="sm:w-1/4 w-full">
					<h2 className="text-center">COntent</h2>
				</aside>
			</div>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
Layout.defaultProps = {
	title: 'News Daily',
};
