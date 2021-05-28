import React, { Component } from 'react'
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
        </a>
        </Menu.Item>
    </Menu>
);

export default class Dropdowns extends Component {
    render() {
        return (
            <div>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Button className="Dropdown-Button">bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Button className="Dropdown-Button">bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Button className="Dropdown-Button" >bottomRight</Button>
                </Dropdown>
                <br />
                <Dropdown overlay={menu} placement="topLeft" arrow>
                    <Button className="Dropdown-Button" >topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topCenter" arrow>
                    <Button className="Dropdown-Button" >topCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topRight" arrow>
                    <Button className="Dropdown-Button" >topRight</Button>
                </Dropdown >
            </div>
        )
    }
}
