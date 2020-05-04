import React from "react";
import { List, Card, CardHeader, CardContent, CardFooter, Link, Row, Col } from 'framework7-react';
import crypto from 'crypto-js';
import { dict } from "../../Dict";

const ExamList = (props) => {

  if (props.exams) {
    return (
      <Row>
        {props.exams.map((exam) =>
          <Col width="50" tabletWidth="33">
            <Card className="demo-card-header-pic">
              <CardHeader
                className="no-border"
                valign="bottom"
                style={{ backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-1.jpg)' }}
              >{exam.title}</CardHeader>
              <CardContent>
                <p className="date">Posted on January 21, 2015</p>
                <p>{exam.description}</p>
              </CardContent>
              <CardFooter>
                <Link></Link>
                <Link href={'/exams/' + exam.id}>{dict.more}</Link>
              </CardFooter>
            </Card>
          </Col>
        )}
      </Row>
    )
  } else {
    return (<ul></ul>)
  }
}
export default ExamList;
