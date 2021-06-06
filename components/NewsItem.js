import styles from '../styles/Home.module.css';

import moment from 'moment';
import Link from 'next/link';

export default function NewsItem({ news }) {
	const timestamp = moment(news?.date).format('MMMM Do YYYY, h:mm:ss a');
	return (
		<div className={styles.card}>
			<Link href={news?.url}>
				<a>
					<div className="flex justify-between">
						<small className="mr-1 font-bold">{news?.source.name}</small>
						<small className="font-bold">{timestamp}</small>
					</div>
					<img
						src={news?.urlToImage ? news?.urlToImage : '/images/default.jpg'}
						height={300}
						width={400}
					/>

					<h2 className="mt-2 mb-3 text-lg font-bold">{news?.title} &rarr;</h2>
					<p>{news?.description ? news?.description : news?.content}</p>
					{/* <p>{news?.content}</p> */}
				</a>
			</Link>
		</div>
	);
}
