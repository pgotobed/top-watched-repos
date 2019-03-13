import React, {Component} from 'react';
import {Table} from 'antd';

/*
Define the columns of the table
 */
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
}, {
    title: '# of Watchers',
    dataIndex: 'watchers_count',
    key: 'watchers_count',
},{
    title: 'link',
    dataIndex: 'html_url',
    key: 'html_url',
    render: text => <a href={text} rel="noopener noreferrer" target="_blank">Github Page</a>,
}];


/**
 * Simple component to display data in organized table
 */
export default class ResultTable extends Component {
    render() {
        return (
            <Table loading={this.props.loading} style={{width: "70%"}} dataSource={this.props.repos} columns={columns}
                   bordered pagination={false}/>
        )
    }
}