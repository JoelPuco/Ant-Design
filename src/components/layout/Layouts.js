import React, { Component } from 'react';
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default class Layouts extends Component {
    render() {
        return (
            <div className="Layouts">
                <Layout>
                    <Header className="Layout-Header">Header</Header>
                    <Layout>
                        <Sider className="Layout-Slider">Sider</Sider>
                        <Content className="Layout-Content">Content</Content>
                    </Layout>
                    <Footer className="Layout-Footer">Footer</Footer>
                </Layout>
            </div>
        )
    }
}
