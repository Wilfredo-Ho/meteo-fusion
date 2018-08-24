import React from 'react';

import { Card, Row, Col, Spin, Icon, DatePicker, Divider } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import axios from 'axios';
import echarts from 'echarts';
import "./month.less";

const { MonthPicker } = DatePicker;

class Month extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            monthData: [],
            currentIndex: 0,
            loading: false,
            loading1: false,
            month: '2018-07',
            cid: 1
        };
        this.getMonthData = this.getMonthData.bind(this);
        this.toggle = this.toggle.bind(this);
        this.renderChart = this.renderChart.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    getMonthData (cur = this.state.month) {
        axios.get("/weather/month")
            .then(response => {
                let res = response.data;
                if(res.status === '0') {
                    this.setState({
                        monthData: res.result.filter(item => item.time === cur)
                    });
                    this.setState({ loading1: false});
                }
            })
    }

    getDayData (cur = '2018-07', cid = 1, city = "哈尔滨") {
        this.setState({
            loading: true
        });
        axios.get("/weather/day", {
            params: {
                month: cur,
                cid: cid
            }
        }).then(response => {
                let res = response.data;
                if(res.status === '0') {

                    this.renderChart({
                        data: res.result,
                        time: cur,
                        city
                    });
                }
            })
    }

    renderChart (result) {
        let chart = echarts.init(this.refs.chart);
        chart.setOption({
            title: {
                text: `${result.city}市${result.time}天气图`,
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#666'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: result.data.map(item => item.time.replace(result.time + "-", ""))
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '最高温度',
                    type: 'line',
                    data: result.data.map(item => item.tempH.replace("℃", ""))
                }, {
                    name: '最低温度',
                    type: 'line',
                    data: result.data.map(item => item.tempL.replace("℃", ""))
                }
            ]
        }, true);
        this.setState({
            loading: false
        });
    }

    toggle (item, index) {
        this.setState({
            currentIndex: index
        });
        this.getDayData(this.state.month, item.cid, item.city)
    }

    disabledDate (value) {
        return value < new Date('2018-01') || value >= new Date("2018-08")
    }

    changeDate (date, dateString) {
        this.setState({ loading1: true});
        this.getMonthData(dateString);
    }

    componentWillMount () {
        this.getMonthData();
    }

    componentDidMount () {
        this.getDayData();
    }

    render () {
        return (
            <div className="page-container" style={{ padding: 30}}>
                <div className="top" style={{marginBottom: 20, textAlign: 'center'}}>
                    <MonthPicker
                        style={{ width: 300}}
                        size="large"
                        locale={locale}
                        disabledDate={this.disabledDate}
                        onChange={this.changeDate} />
                </div>
                <Divider />
                <Spin spinning={this.state.loading1} delay={500}>
                    <div className="header">
                        <Row gutter={16}>
                            {
                                this.state.monthData.slice(0, 4).map((item, index) => (
                                    <Col span={6} key={index} onClick={() => this.toggle(item, index)}>
                                        <Card
                                            className={{active: this.state.currentIndex === index}}
                                            title={item.city}
                                            bordered={false}
                                            hoverable>
                                            <p>最高温度: {item.max}</p>
                                            <p>最低温度: {item.min}</p>
                                            <p>晴朗指数: {item.count} / {item.total}</p>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </Spin>
                <div className="content">
                    <Spin spinning={this.state.loading} indicator={<Icon type="loading" style={{fontSize: 30}}/>} delay={500}>
                        <div ref="chart" style={{ width: '100%', height: 600}} />
                    </Spin>
                </div>
            </div>
        )
    }
}

export default Month;