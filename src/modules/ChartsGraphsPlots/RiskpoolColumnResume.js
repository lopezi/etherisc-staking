import React from 'react';
import { Column } from '@ant-design/plots';

const RiskpoolColumnResume = () => {

    const data = [
        { "epoch": "Epoch 1", "type": "$DIP Balance", "value": 9000 },
        { "epoch": "Epoch 1", "type": "$DIP TLV", "value": 11200 },
        { "epoch": "Epoch 1", "type": "$USDC TLV", "value": 16000 },
        { "epoch": "Epoch 2", "type": "$DIP Balance", "value": 10000 },
        { "epoch": "Epoch 2", "type": "$DIP TLV", "value": 19000 },
        { "epoch": "Epoch 2", "type": "$USDC TLV", "value": 26000 },
        { "epoch": "Epoch 3", "type": "$DIP Balance", "value": 14000 },
        { "epoch": "Epoch 3", "type": "$DIP TLV", "value": 9000 },
        { "epoch": "Epoch 3", "type": "$USDC TLV", "value": 22000 },
        { "epoch": "Epoch 4", "type": "$DIP Balance", "value": 21000 },
        { "epoch": "Epoch 4", "type": "$DIP TLV", "value": 15000 },
        { "epoch": "Epoch 4", "type": "$USDC TLV", "value": 38100 }
    ];
    const config = {
        data,
        theme: {
            colors10: [
                '#93278F',
                '#F35910',
                '#00A99D',
                '#2D8E4B',
                '#F01378',
            ]
        },
        xField: 'epoch',
        yField: 'value',
        seriesField: 'type',
        isGroup: 'true',
        columnStyle: {
            radius: [20, 20, 0, 0],
        },
    };

    return <Column {...config}/>;
};

export default RiskpoolColumnResume;
