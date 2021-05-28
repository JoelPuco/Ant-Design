import React, { Component } from 'react'
import { Button } from "antd";

export default class Buttons extends Component {
    render() {
        return (
            <div className="Buttons">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        )
    }
}
