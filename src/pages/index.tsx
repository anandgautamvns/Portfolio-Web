import React from "react";
import Home from "./home";
import { Layout, Space } from 'antd';

import styles from './index.module.scss'

const { Header, Footer, Sider, Content } = Layout;

interface Props {

}
const Page: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
        <Layout className={styles.layout}>
            <Header className={styles.header}>Header</Header>
            <Content className={styles.content}><Home /></Content>
            <Footer className={styles.footer}>Footer</Footer>
        </Layout>
        </div>
    )
}

export default Page;