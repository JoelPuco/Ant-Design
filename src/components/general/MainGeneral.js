import React, { Component } from 'react';
import { Row ,Col } from "antd";
import Buttons from './Buttons';
import Icons from './Icons';
import Typographys from './Typographys';

export default class MainGenaral extends Component {
    render() {
        return (
            <div className="MainGeneral">
                <h3>Componentes Generales</h3>
                <Row>
                    <Col span={8}>
                        <h4>Botones</h4>
                        <Buttons/>
                    </Col>
                    <Col span={8}>
                        <h4>Iconos</h4>
                        <Icons/>
                    </Col>
                    <Col span={8}>
                        <h4>Tipografía</h4>
                        <Typographys/>
                    </Col>
                </Row>
            </div>
        )
    }
}
