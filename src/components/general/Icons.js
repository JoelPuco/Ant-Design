import React, { Component } from 'react'
import { 
    UpCircleTwoTone,
    DownCircleTwoTone,
    LeftCircleTwoTone,
    RightCircleTwoTone
 } from "@ant-design/icons";

export default class Icons extends Component {
    render() {
        return (
            <div className="Icons">
                <UpCircleTwoTone className="Icon"/>
                <DownCircleTwoTone className="Icon" twoToneColor="#CB4335"/>
                <LeftCircleTwoTone className="Icon" twoToneColor="#F4D03F"/>
                <RightCircleTwoTone className="Icon" twoToneColor="#28B463"/>
            </div>
        )
    }
}
