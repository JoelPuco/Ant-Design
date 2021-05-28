import { Row, Col } from 'antd';
import React, { Component } from 'react';

export default class Grids extends Component {
    render() {
        return (
            <div className="Grids">   
                <Row>
                    <Col span={24} className="Col-24">col (col-24)</Col>
                </Row>
                <Row>
                    <Col span={12} className="Col1-12">col-12</Col>
                    <Col span={12}className="Col2-12">col-12</Col>
                </Row>
                <Row>
                    <Col span={8} className="Col1-8">col-8</Col>
                    <Col span={8} className="Col2-8">col-8</Col>
                    <Col span={8} className="Col3-8">col-8</Col>
                </Row>
                <Row>
                    <Col span={6} className="Col1-6">col-6</Col>
                    <Col span={6} className="Col2-6">col-6</Col>
                    <Col span={6} className="Col3-6">col-6</Col>
                    <Col span={6} className="Col4-6">col-6</Col>
                </Row>
            </div>
        )
    }
}
