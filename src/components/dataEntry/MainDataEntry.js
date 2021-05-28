import { Col, Row } from 'antd'
import React, { Component } from 'react'
import AutoCompletes from './AutoCompletes'
import Cascaders from './Cascaders'
import Checkboxs from './Checkboxs'
import DatePickers from './DatePickers'
import Forms from './Forms'
import InputNumbers from './InputNumbers'
import Inputs from './Inputs'
import Mentionss from './Mentionss'

export default class MainDataEntry extends Component {
    render() {
        return (
            <div className="MainDataEntry">
                <h3>Componentes Data Entry</h3>
                <Row>
                    <Col span={8}>
                        <h4>AutoComplete</h4>
                        <AutoCompletes/>
                    </Col>
                    <Col span={8}>
                        <h4>Cascader</h4>
                        <Cascaders/>
                    </Col>
                    <Col span={8}>
                        <h4>Checkbox</h4>
                        <Checkboxs/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>DatePiker</h4>
                        <DatePickers/>
                    </Col>
                    <Col span={8}>
                        <h4>Form</h4>
                        <Forms/>
                    </Col>
                    <Col span={8}>
                        <h4>Inputs</h4>
                        <Inputs/>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <h4>InputNumber</h4>
                        <InputNumbers/>
                    </Col>
                    <Col span={8}>
                        <h4>Mentions</h4>
                        <Mentionss/>
                    </Col>
                </Row>
            </div>
        )
    }
}
