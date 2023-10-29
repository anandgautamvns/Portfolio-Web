import React from "react";
import styles from './index.module.scss'
import { Row, Col, Button, Card, Flex, Typography, Divider } from "antd";
import { BellOutlined } from "@ant-design/icons";


const cardStyle: React.CSSProperties = {
    width: `100%`,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 273,
};

interface Props {

}
const Home: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col xs={24} sm={24} md={8}>
                        <Flex vertical align='center' justify='center'>
                            <div className={styles.imageWrapper}>
                                <img
                                    alt="avatar"
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    style={imgStyle}
                                />
                            </div>
                        </Flex>
                    </Col>
                    <Col xs={24} sm={24} md={16}>
                        <div>
                            <Flex vertical align='center' justify='center'>
                                <Typography.Title level={3}>
                                    Anand Kumar Gautam
                                </Typography.Title>
                            </Flex>
                            <Divider />
                            <Row>
                                <Col span={10}>
                                    <Flex vertical align='center' justify='center'>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                    </Flex>
                                </Col>
                                <Col span={4}><Divider type="vertical" /></Col>
                                <Col span={10}>
                                    <Flex vertical align='center' justify='center'>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                        <div>
                                            <BellOutlined />
                                            <label>Gurgaon</label>
                                        </div>
                                    </Flex>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Home;