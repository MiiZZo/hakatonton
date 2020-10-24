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
		name: 'Январь', "средняя зарплата": 4000, amt: 2400,
	},
	{
		name: 'Февраль', "средняя зарплата": 3000, amt: 2210,
	},
	{
		name: 'Март', "средняя зарплата": 9800, amt: 2290,
	},
	{
		name: 'Апрель', "средняя зарплата": 2780, amt: 2000,
	},
	{
		name: 'Май', "средняя зарплата": 1890, amt: 2181,
	},
	{
		name: 'Июнь', "средняя зарплата": 2390, amt: 2500,
	},
	{
		name: 'Июль', "средняя зарплата": 3490, amt: 2100,
    },
    {
		name: 'Август', "средняя зарплата": 3490, amt: 2300,
    },
    {
		name: 'Сентябрь', "средняя зарплата": 2390, amt: 1800,
    },
    {
		name: 'Октябрь', "средняя зарплата": 3490, amt: 2500,
    },
    {
		name: 'Ноябрь', "средняя зарплата": 4800, amt: 1900,
    },
    {
		name: 'Декабрь', "средняя зарплата": 2500, amt: 1500,
	},
];

export default class SalaryGraph extends PureComponent {
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
                <Line type="monotone" dataKey="средняя зарплата" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 5 }} />
            </LineChart>
        );
    }
}
