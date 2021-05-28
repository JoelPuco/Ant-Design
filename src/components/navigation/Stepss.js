import React, { Component } from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

export default class Stepss extends Component {
    render() {
        return (
            <div className="Stepss">
                <Steps direction="vertical" current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        )
    }
}
