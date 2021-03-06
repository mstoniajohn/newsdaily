import styles from '../styles/Home.module.css';
import { CgExternal } from 'react-icons/cg';
import moment from 'moment';
import Link from 'next/link';

export default function NewsItem({ news }) {
	// const timestamp = ;
	return (
		<div className="cursor-pointer shadow border p-1 rounded border-gray-200 transition duration-500 ease-in-out hover:border-red-300 transform hover:-translate-y-1 hover:scale-105 drop-shadow-sm">
			<Link className="" href={news?.url}>
				<a className="no-underline">
					<div className="flex justify-between">
						<small className="mr-1 font-bold">{news?.source.name}</small>
						<small className="font-bold">
							{moment(news.date).format('MMMM Do YYYY, h:mm:ss a')}
						</small>
					</div>
					<img
						className="w-full object-cover "
						src={news?.urlToImage ? news?.urlToImage : '/images/default.jpg'}
						height={300}
						width={400}
						loading="lazy"
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
