import Layout from '@/components/Layout';
import qs from 'qs';
import { useRouter } from 'next/router';
import NewsItem from '@/components/NewsItem';
import Link from 'next/link';
export default function searchNews({ data }) {
	console.log(data);
	const router = useRouter();
	return (
		<Layout title="Search Results">
			<Link href="/news">Go Back</Link>
			<h1>Search Results for {router.query.term}</h1>
			{data.length === 0 && <h2>No events</h2>}
			<div className="grid md:grid-cols-4 gap-8">
				{data.map((art) => (
					<NewsItem key={art.id} news={art} />
				))}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [
				{ title_contains: term },
				{ author_contains: term },
				{ content_contains: term },
			],
		},
	});
	// const query = 'bitcoin';
	const res = await fetch(
		`https://newsapi.org/v2/everything?q=${term}&language=en&sortBy=popularity&apiKey=b1361012dfaa415bba12852df1dc31aa`
	);

	// const contRes = await fetch(
	// 	`https://newsapi.org/v2/top-headlines?country=${query}&apiKey=b1361012dfaa415bba12852df1dc31aa`
	// );
	const data = await res.json();
	console.log(data);

	return {
		props: {
			data: data.articles,
		},
	};
}
