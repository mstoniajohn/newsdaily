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
			<div className="mt-4 align-center h-full w-screen">
				<main className="p-2">{children}</main>
			</div>

			<footer className="h-16 text-center text-gray-400 border-t-2 pt-3 mt-3">
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
