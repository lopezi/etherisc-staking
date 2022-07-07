import React from 'react';
import {Table} from 'antd';

const columns = [
    {
        title: 'Totals',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: ' Number of',
        dataIndex: 'age',
        key: 'age',
    },
];

const data = [
    {
        key: '1',
        name: 'Active policies',
        age: 561,
    },
    {
        key: '2',
        name: 'Total premiums',
        age: 761,
    },
    {
        key: '3',
        name: 'Sum insured',
        age: 100020,
    },
    {
        key: '4',
        name: 'Expired policies',
        age: 45,
    },
    {
        key: '5',
        name: 'Expired amount',
        age: 882200,
    },
    {
        key: '6',
        name: 'Claims count',
        age: 177181,
    },
    {
        key: '7',
        name: 'Claims',
        age: 889 ,
    },
];

const PoliciesTableResume = () => {
    return (
        <div style={{margin: "40px 0"}}>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}

export default PoliciesTableResume;
