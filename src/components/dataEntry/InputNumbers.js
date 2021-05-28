import React, { Component } from 'react';
import { InputNumber, Button, Col} from 'antd';
import { useState } from "react";


function onChange(value) {
    console.log('changed', value);
}
export default function InputNumbers() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <Col className="Input-Btn">
                <InputNumber min={1} max={10} value={value} onChange={setValue} />
                <Button
                    type="primary"
                    onClick={() => {
                        setValue(0);
                    }}
                >
                    Reset
                </Button>
            </Col>
        </div>
    )
}
