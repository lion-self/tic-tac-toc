import React, { Component } from 'react';
import { Table } from 'antd';
import style from './antdTable.less';

class AntdTable extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
        ];
          
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
        ];

        return (
            <div className={style.father}>
                <div className={style.tableHead}><span>这里有一些内容</span></div>
                <div className={style.tableBody}>
                    <Table 
                        dataSource={dataSource} 
                        columns={columns} />;
                </div>
            </div>
        )
    }
}

export default AntdTable;
