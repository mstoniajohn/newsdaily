import Layout from '@/components/Layout';
import qs from 'qs';
import { useRouter } from 'next/router';
import NewsItem from '@/components/NewsItem';
import Link from 'next/link';
import { TiArrowBackOutline } from 'react-icons/ti';
export default function searchNews({ data }) {
	console.log(data);
	const router = useRouter();
	return (
		<Layout title="Search News">
			<Link href="/">
				<a className="btn">
					<span className="text-2xl">
						<TiArrowBackOutline />
					</span>
				</a>
			</Link>
			<h1 className="text-3xl font-bold mb-9 mt-4 blue-color">
				Search Results for {router.query.term}
			</h1>
			{data.length === 0 && <h2 className="text-xl">No articles found.</h2>}
			<div className="grid md:grid-cols-3 gap-8">
				{data.map((art, i) => (
					<NewsItem key={i} news={art} />
				))}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { term } }) {
	// const queryS = qs.stringify({
	// 	_where: {
	// 		_or: [
	// 			{ title_contains: term },
	// 			{ author_contains: term },
	// 			{ description_contains: term },
	// 		],
	// 	},
	// });
	// const query = 'bitcoin';
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${term}&language=en&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	);

	const data = await res.json();

	return {
		props: {
			data: data.articles,
		},
	};
}
