import React, { Component } from 'react';
import { Cascader } from "antd";

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

function onChange(value) {
    console.log(value);
}

export default class Cascaders extends Component {
    render() {
        return (
            <div>
                <Cascader
                    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                    options={options}
                    onChange={onChange}
                />,
            </div>
        )
    }
}
