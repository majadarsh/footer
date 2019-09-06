import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import "../Accordian.css";
import { FeatureData } from "../Data/FeatureData";

const Features = props => {
  return (
    <section className="features">
      <div className="container-fluid">
        <h3>More features</h3>
      </div>

      <Accordion atomic={true}>
        {FeatureData.map((tab, ind) => {
          return (
            <React.Fragment key={ind}>
              <AccordionItem title={tab.mtitle}>
                <Row>
                  {tab.options.map((dt, i) => {
                    return (
                      <Col sm="6" md="6" xs="12" lg="3">
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
              </AccordionItem>
            </React.Fragment>
          );
        })}
      </Accordion>
    </section>
  );
};
export default Features;
