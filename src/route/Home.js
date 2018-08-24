import React from 'react';
import {Card, Row, Col, Icon, Avatar} from 'antd';

import axios from 'axios';
// import "./Home.less";
import Ylj from '../static/ylj.png';

const Meta = Card.Meta;
class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      platform: []
    };
    this.getPlatform = this.getPlatform.bind(this);
  }

  getPlatform () {
    axios.get("/platform").then(response => response.data)
      .then(res => {
        if(res.status === "0"){
          this.setState({
            platform: res.result
          })
        }
      })
  }

  componentWillMount() {
    this.getPlatform();
  }

  render () {

  const cols = this.state.platform.map((item, index) => (
      <Col key={index} span={6} onClick={() => {window.open(item.url)}} style={{cursor: 'pointer'}}>
        <Card
          title={item.attr}
          bodyStyle={{textOverflow: 'ellipsis', overflow: 'hidden', 'whiteSpace': 'nowrap'}}
          cover={<img src={Ylj} />}
          hoverable
        >
        {item.name}
        </Card>
      </Col>
    ));

    return (
      <div>
        <Row gutter={16} style={{margin: 30}}>
        {
          cols.slice(0, 4)
        }
        </Row>
        <Row gutter={16} style={{margin: 30}}>
        {
          cols.slice(4, 8)
        }
        </Row>
        <Row gutter={16} style={{margin: 30}}>
        {
          cols.slice(8)
        }
        </Row>
      </div>
    );
  }
}

export default Home;