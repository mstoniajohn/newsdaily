import NewsItem from '@/components/NewsItem';
// import moment from 'moment';
// import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home({ data }) {
	// console.log(data[0].publishedAt);
	return (
		<Layout title="News Daily">
			<h1 className="text-3xl font-bold mb-9 blue-color">
				Today's top stories
				{/* {moment(data[0].publishedAt).format('MMMM Do')} */}
			</h1>

			<div className="grid md:grid-cols-3 gap-8">
				{data && data?.map((news, i) => <NewsItem key={i} news={news} />)}
			</div>
		</Layout>
	);
}
export async function getStaticProps() {
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	);
	const data = await res?.json();

	// console.log(data);
	return {
		props: {
			data: data?.articles,
		},
	};
}
