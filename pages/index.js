import NewsItem from '@/components/NewsItem';

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
	console.log(data);
	return (
		<Layout>
			<h1 className="text-3xl font-bold mb-9">Your latest news</h1>

			{/* <p className={styles.description}>description</p> */}

			<div className="grid md:grid-cols-4 gap-8">
				{data.map((news, i) => (
					<NewsItem key={i} news={news} />
				))}
			</div>
		</Layout>
	);
}
export async function getServerSideProps() {
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=9944f76533ad43bca768881745ba21d8`
	);
	const data = await res.json();

	console.log(data);
	return {
		props: {
			data: data.articles,
		},
	};
}
