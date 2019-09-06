import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import { FeatureData } from "../Data/FeatureData";

class MoreFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="moreFeatures">
        <div className="container-fluid">
          <h3>More Features</h3>
        </div>
        <Nav tabs>
          {FeatureData.map((tab, ind) => {
            let tabId = ind + 1;
            return (
              <React.Fragment key={ind}>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === tabId
                    })}
                    onClick={() => {
                      this.toggle(tabId);
                    }}
                  >
                    {tab.title()}
                  </NavLink>
                </NavItem>
              </React.Fragment>
            );
          })}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {FeatureData.map((tab, ind) => {
            return (
              <React.Fragment key={ind}>
                <TabPane tabId={ind + 1}>
                  <Row>
                    {tab.options.map((dt, i) => {
                      return (
                        <Col sm="6" md="6" xs="12" lg="3" key={i}>
                          <Card body>
                            <CardTitle>{dt.label}</CardTitle>
                            <CardText>{dt.description}</CardText>
                            <a href={dt.link} target="_blank">
                              Learn More
                            </a>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </TabPane>
              </React.Fragment>
            );
          })}
        </TabContent>
      </div>
    );
  }
}

export default MoreFeatures;
