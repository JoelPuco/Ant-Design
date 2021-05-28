import React, { Component } from 'react';
import { Row, Col, Space, Card } from "antd";

export default class Spaces extends Component {
    render() {
        return (
            <div className="Spaces">
                <Row>
                    <Col span={12}>
                        <Space>
                            <Card title="Card" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                            <Card title="Card" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Space>
                    </Col>
                    <Col span={12}>
                        <Space direction="vertical">
                            <Card title="Card" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                            <Card title="Card" style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </div>
        )
    }
}
