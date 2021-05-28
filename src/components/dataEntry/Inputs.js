import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);
export default class Inputs extends Component {
    render() {
        return (
            <div className="Inputs">
                <Input placeholder="Usuario" />
                <Input.Password placeholder="Contraseña" className="Input-pass"/>
                <Search placeholder="Buscar" onSearch={onSearch} enterButton className="Input-search" />
            </div>
        )
    }
}
