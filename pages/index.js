import CovidBox from '@/components/CovidBox';
import NewsItem from '@/components/NewsItem';
// import moment from 'moment';
// import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home({ data, covidData }) {
	console.log(data[0].publishedAt);
	return (
		<Layout title="News Daily">
			<div className="md:flex">
				<section className="sm:w-3/4 ">
					<h2 className="text-2xl text-center font-bold mb-9 text-gray-400">
						Today's top stories
						{/* {moment(data[0].publishedAt).format('MMMM Do')} */}
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{data && data?.map((news, i) => <NewsItem key={i} news={news} />)}
					</div>
				</section>

				<aside className="sm:w-1/4 w-full p-3">
					<h2 className="text-center text-xl text-gray-400 font-bold mb-8">
						Trending Topics
					</h2>
					<div>
						<CovidBox covid={covidData} />
					</div>
				</aside>
			</div>
		</Layout>
	);
}
export async function getServerSideProps() {
	const res = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
	);
	const data = await res?.json();

	const covidRes = await fetch(`https://disease.sh/v3/covid-19/all`);
	const covidData = await covidRes.json();
	console.log(covidData);
	return {
		props: {
			data: data?.articles,
			covidData,
		},
	};
}
