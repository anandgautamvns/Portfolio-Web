import React from "react";
import { Flex as AntFlex, FlexProps, Segmented } from 'antd';
import styles from './index.module.scss'
import { FlexWrap, FlexJustify, FlexAlignItem } from "./type";

interface Props {
    wrap: FlexWrap;
    justify: FlexJustify;
    alignItems: FlexAlignItem;
    resProps: FlexProps
}

const Flex: React.FC<Props> = (props) => {
    const { wrap, justify, alignItems, resProps } = props;
    return (
        <AntFlex vertical wrap={wrap} justify={justify} align={alignItems} {...resProps}/>
    )
}

export default Flex;