import React, { Component } from 'react';
import { Divider } from "antd";

export default class Dividers extends Component {
    render() {
        return (
            <div className="Dividers">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider>Text</Divider>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="left">Left Text</Divider>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="right">Right Text</Divider>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                    probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
            </div>
        )
    }
}
