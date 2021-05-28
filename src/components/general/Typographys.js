import React, { Component } from 'react';
import { Typography } from "antd";

const {Title} = Typography;
export default class Typographys extends Component {
    render() {
        return (
            <div>
                <Title type="success">h1. Ant Design</Title>
                <Title type="warning" level={2}>h2. Ant Design</Title>
                <Title type="danger" level={3}>h3. Ant Design</Title>
                <Title disabled level={4}>h4. Ant Design</Title>
                <Title mark level={5}>h5. Ant Design</Title>
            </div>
        )
    }
}
