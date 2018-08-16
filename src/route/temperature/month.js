import React from 'react';

import { Card, Row, Col } from 'antd';

class Month extends React.Component {
    render () {
        return (
            <div className="page-container" style={{ padding: 30}}>
                <div className="header">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>Card content</Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Month;