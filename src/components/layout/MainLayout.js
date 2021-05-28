import React, { Component } from 'react'
import Dividers from './Dividers'
import { Row , Col } from "antd";
import Grids from './Grids';
import Layouts from './Layouts';
import Spaces from './Spaces';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="MainLayout">
                <h3>Componentes Layout</h3>
                <Row>
                    <Col span={8}>
                        <h4>Divider</h4>
                        <Dividers/>
                    </Col>
                    <Col span={8}>
                        <h4>Grid</h4>
                        <Grids/>
                    </Col>
                    <Col span={8}>
                        <h4>Layout</h4>
                        <Layouts/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                    <h4>Space</h4>
                    <Spaces/>
                    </Col>
                </Row>
            </div>
        )
    }
}
