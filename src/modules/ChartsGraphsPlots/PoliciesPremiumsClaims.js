import React from 'react';
import { Line } from '@ant-design/plots';

const PoliciesPremiumsClaims = () => {

    const data = [
        {
            "name": "Premiums",
            "year": "2017",
            "gdp": 2771
        },
        {
            "name": "Premiums",
            "year": "2018",
            "gdp": 27712
        },
        {
            "name": "Premiums",
            "year": "2019",
            "gdp": 277171
        },{
            "name": "Premiums",
            "year": "2020",
            "gdp": 1771721
        },{
            "name": "Premiums",
            "year": "2021",
            "gdp": 2771713
        },{
            "name": "Claims",
            "year": "2017",
            "gdp": 1771
        },{
            "name": "Claims",
            "year": "2018",
            "gdp": 17711
        },{
            "name": "Claims",
            "year": "2019",
            "gdp": 177122
        },{
            "name": "Claims",
            "year": "2020",
            "gdp": 277144
        },{
            "name": "Claims",
            "year": "2021",
            "gdp": 771241
        },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        theme: {
            colors10: [
                '#F35910',
                '#00A99D',
                '#93278F',
                '#2D8E4B',
                '#F01378',
            ]
        },
        yAxis: {
            label: {
                formatter: (v) => `${(v / 0.1e8).toFixed(1)} M`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return <Line {...config} />;
};

export default PoliciesPremiumsClaims;
