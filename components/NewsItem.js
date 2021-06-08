import styles from '../styles/Home.module.css';
import { CgExternal } from 'react-icons/cg';
// import moment from 'moment';
import Link from 'next/link';

export default function NewsItem({ news }) {
	// const timestamp = ;
	return (
		<div className={styles.card}>
			<Link href={news?.url}>
				<a>
					<div className="flex justify-between">
						<small className="mr-1 font-bold">{news?.source.name}</small>
						{/* <small className="font-bold">
							{moment(news.date).format('MMMM Do YYYY, h:mm:ss a')}
						</small> */}
					</div>
					<img
						src={news?.urlToImage ? news?.urlToImage : '/images/default.jpg'}
						height={300}
						width={400}
					/>

					<div className="p-1">
						<h2 className="mt-2 mb-3 text-md font-bold">{news?.title}</h2>
						<p className="">
							<span>
								{news?.description
									? news?.description
									: 'This article has no description. Click here to see full article'}{' '}
								<CgExternal />
							</span>
						</p>
					</div>
					{/* <p>{news?.content}</p> */}
				</a>
			</Link>
		</div>
	);
}
