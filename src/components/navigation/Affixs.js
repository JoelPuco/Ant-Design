import React from 'react';
import { Button } from "antd";

export const Affixs = ({setHeader, header}) => {
    return (
        <div className="Affixs">
            <Button type="dashed" block className="Affix-Button" onClick={() => setHeader(header + 50)}>
                Modificar el Affix - Header
            </Button>
            <Button type="dashed" block className="Affix-Button" onClick={() => setHeader(0)}>
                Regresar a su estado inicial
            </Button>
        </div>
    )
}
