import React from "react";
import { List, Card, CardHeader, CardContent, CardFooter, Link, Row, Col } from 'framework7-react';
import crypto from 'crypto-js';
import { dict } from "../../Dict";

const CourseList = (props) => {

  if (props.courses) {
    return (
      <Row>
        {props.courses.map((course) =>
          <Col width="50" tabletWidth="33">
            <Card className="demo-card-header-pic">
              <CardHeader
                className="no-border"
                valign="bottom"
                style={{ backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-1.jpg)' }}
              >{course.title}</CardHeader>
              <CardContent>
                <p className="date">Posted on January 21, 2015</p>
                <p>{course.description}</p>
              </CardContent>
              <CardFooter>
                <Link></Link>
                <Link href={'/courses/' + course.id}>{dict.more}</Link>
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
export default CourseList;
