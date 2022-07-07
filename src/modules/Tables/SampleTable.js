import React from 'react';
import {Table } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: ' Sample data',
        dataIndex: 'age',
        key: 'age',
    },{
        title: ' Sample data',
        dataIndex: 'number',
        key: 'number',
    },
];

const data = [
    {
        key: '1',
        name: '#9828289',
        age: 561,
        number: 728727,
    },
    {
        key: '2',
        name: '#9828289',
        age: 761,
        number: 728727,
    },
    {
        key: '3',
        name: '#9828289',
        age: 100020,
        number: 728727,
    },
    {
        key: '4',
        name: '#9828289',
        age: 45,
        number: 728727,
    },
    {
        key: '5',
        name: '#9828289',
        age: 882200,
        number: 728727,
    },
    {
        key: '6',
        name: '#9828289',
        age: 177181,
        number: 728727,
    },
    {
        key: '7',
        name: '#9828289',
        age: 889 ,
        number: 728727,
    },
];

const SampleTable = () => {
    return (
        <div style={{margin: "40px 0"}}>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}

export default SampleTable;
