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
				<a className="text-2xl text-red-400 text-center ml-auto mr-auto">
					<TiArrowBackOutline className="text-2xl" />
				</a>
			</Link>
			<h2 className="text-2xl font-bold mb-9 mt-4 text-gray-400 text-center">
				Search Results for {router.query?.term}
			</h2>
			{data?.length === 0 && <h2 className="text-xl">No articles found.</h2>}
			<div className="grid md:grid-cols-3 gap-8">
				{data && data?.map((art, i) => <NewsItem key={i} news={art} />)}
			</div>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { term } = context.query;
	console.log(term);
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?q=${term}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	);
	// console.log('RES', res);

	const data = await res.json();
	// console.log(data);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: data.articles,
		},
	};
}
