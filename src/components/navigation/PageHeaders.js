import React, { Component } from 'react';
import { PageHeader, Card } from 'antd';

export default class PageHeaders extends Component {
    render() {
        return (
            <div>
                <Card style={{padding: -50}}>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => null}
                        title="Title"
                        subTitle="This is a subtitle"
                    />
                </Card>
            </div>
        )
    }
}
