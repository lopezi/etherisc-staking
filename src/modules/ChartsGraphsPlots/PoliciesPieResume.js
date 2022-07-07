import React from 'react';
import { Pie } from '@ant-design/plots';

const PoliciesPieResume = () => {
    const data = [
        {
            type: 'Active policies',
            value: 27,
        },
        {
            type: 'Expired policies',
            value: 25,
        },
        {
            type: 'Claims',
            value: 18,
        },
    ];
    const config = {
        appendPadding: 10,
        theme: {
            colors10: [
                '#F35910',
                '#00A99D',
                '#93278F',
                '#2D8E4B',
                '#F01378',
            ]
        },
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

export default PoliciesPieResume;
