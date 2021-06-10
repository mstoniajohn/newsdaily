import moment from 'moment';

export default function CovidBox({ covid }) {
	return (
		<div className="pl-9">
			<p>
				{' '}
				<strong className="text-xl text-gray-400">Global Covid Update </strong>
				<br />{' '}
				<small>{moment(covid.updated).format('MMMM Do YYYY, h:mm:ss a')}</small>
			</p>
			<h4 className="text-xl text-yellow-400">New Cases</h4>
			<p>
				<span className="font-bold">Cases</span>:{' '}
				{covid.todayCases.toLocaleString()}
			</p>
			<p>
				<span className="font-bold"> Deaths</span>:{' '}
				{covid.todayDeaths.toLocaleString()}
			</p>
			<p>
				<span className="font-bold">Recovered</span>:{' '}
				{covid.todayRecovered.toLocaleString()}
			</p>
			<hr className="mt-5 mb-4" />
			<h4 className="text-xl text-yellow-400">Total Cases</h4>
			<p>
				<span className="font-bold">Cases</span>: {covid.cases.toLocaleString()}
			</p>
			<p>
				<span className="font-bold">Deaths</span>:{' '}
				{covid.deaths.toLocaleString()}
			</p>
			<p>
				<span className="font-bold">Recovered</span>:{' '}
				{covid.recovered.toLocaleString()}
			</p>
		</div>
	);
}
