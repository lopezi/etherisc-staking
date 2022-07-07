import React from 'react';
import {Table, Tag } from 'antd';

const columns = [
    {
        title: 'Active investments',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Number of',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Current epoch',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 8 ? '#93278F' : '#00A99D';

                    if (tag === 'special') {
                        color = '#F35910';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const data = [
    {
        key: '2',
        name: 'Investors',
        number: 56810,
        tags: ['↑up 150%'],
    },
    {
        key: '3',
        name: '$DIP Balance',
        number: 1000000.00,
        tags: ['↑up 15%'],
    },
    {
        key: '4',
        name: '$DIP TVL',
        number: 5562770,
        tags: ['↓ down 3.1%' ],
    },
    {
        key: '5',
        name: '$USDC TVL',
        number: 100000,
        tags: ['↑up 2%'],
    },
    {
        key: '6',
        name: '$RPT total supply',
        number: 10000,
        tags: ['↓ down 7%' ],
    },
    {
        key: '7',
        name: '$RPT/DIP price',
        number: 0.1,
        tags: ['↑up 1%'],
    },
];

const RiskpoolTableResume = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}

export default RiskpoolTableResume;
