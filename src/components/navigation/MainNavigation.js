import React from 'react';
import { Row, Col, Menu } from "antd";
import { Affixs } from "./Affixs";
import Breadcrumbs from './Breadcrumbs';
import Dropdowns from './Dropdowns';
import Menus from './Menus';
import PageHeaders from './PageHeaders';
import Paginations from './Paginations';
import Stepss from './Stepss';

export const MainNavigation = ({ setHeader, header }) => {
    return (
        <div className="MainNavigation">
            <h3>Componentes de Navegacion</h3>
            <Row>
                <Col span={8}>
                    <h4>Affix</h4>
                    <Affixs setHeader={setHeader} header={header}/>
                </Col>
                <Col span={8}>
                    <h4>Breadcrumb</h4>
                    <Breadcrumbs/>
                </Col>
                <Col span={8}>
                    <h4>Dropdown</h4>
                    <Dropdowns/>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <h4>Menu</h4>
                    <Menus/>
                </Col>
                <Col span={8}>
                    <h4>Page Header</h4>
                    <PageHeaders/>
                </Col>
                <Col span={8}>
                    <h4>Pagination</h4>
                    <Paginations/>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <h4>Steps</h4>
                    <Stepss/>
                </Col>
            </Row>
        </div>
    )
}
