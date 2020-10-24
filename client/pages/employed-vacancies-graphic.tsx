import React, { PureComponent } from 'react';
import LineChart from '@bit/recharts.recharts.line-chart';
import Line from '@bit/recharts.recharts.line';
import XAxis from '@bit/recharts.recharts.x-axis';
import YAxis from '@bit/recharts.recharts.y-axis';
import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
import Tooltip from '@bit/recharts.recharts.tooltip';
import Legend from '@bit/recharts.recharts.legend';

const data = [
	{
		name: 'Январь', "количество вакансий": 4000, "трудоустроенно": 2400, amt: 2400,
	},
	{
		name: 'Февраль', "количество вакансий": 3000, "трудоустроенно": 1398, amt: 2210,
	},
	{
		name: 'Март', "количество вакансий": 9800, "трудоустроенно": 2500, amt: 2290,
	},
	{
		name: 'Апрель', "количество вакансий": 2780, "трудоустроенно": 3908, amt: 2000,
	},
	{
		name: 'Май', "количество вакансий": 1890, "трудоустроенно": 4800, amt: 2181,
	},
	{
		name: 'Июнь', "количество вакансий": 2390, "трудоустроенно": 3800, amt: 2500,
	},
	{
		name: 'Июль', "количество вакансий": 3490, "трудоустроенно": 4300, amt: 2100,
    },
    {
		name: 'Август', "количество вакансий": 3490, "трудоустроенно": 4300, amt: 2300,
    },
    {
		name: 'Сентябрь', "количество вакансий": 2390, "трудоустроенно": 4300, amt: 1800,
    },
    {
		name: 'Октябрь', "количество вакансий": 3490, "трудоустроенно": 2390, amt: 2500,
    },
    {
		name: 'Ноябрь', "количество вакансий": 4800, "трудоустроенно": 4300, amt: 1900,
    },
    {
		name: 'Декабрь', "количество вакансий": 2500, "трудоустроенно": 4800, amt: 1500,
	},
];

export default class EmployedVacanciesGraphic extends PureComponent {
	state = {
		opacity: {
			uv: 1,
			pv: 1,
		},
	};

	handleMouseEnter = (o) => {
		const { dataKey } = o;
		const { opacity } = this.state;

		this.setState({
			opacity: { ...opacity, [dataKey]: 0.5 },
		});
	}

	handleMouseLeave = (o) => {
		const { dataKey } = o;
		const { opacity } = this.state;

		this.setState({
			opacity: { ...opacity, [dataKey]: 1 },
		});
	}

	render() {
		const { opacity } = this.state;

		return (
			<LineChart
				width={1000}
				height={300}
				data={data}
				margin={{
					top: 5, right: 30, left: 20, bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
				<Line type="monotone" dataKey="трудоустроенно" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 5 }} />
				<Line type="monotone" dataKey="количество вакансий" strokeOpacity={opacity.uv} stroke="#82ca9d" />
			</LineChart>
        );
    }
}
