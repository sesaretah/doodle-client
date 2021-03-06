import React from "react";
import { Block, BlockTitle } from 'framework7-react';
import { dict } from '../../Dict';

const CourseShow = (props) => {
  if (props.course) {
    return (
      <React.Fragment>
        <BlockTitle>{dict.title}</BlockTitle>
        <Block strong mediumInset>
          <p>{props.course.title}</p>
        </Block>

        <BlockTitle>{dict.description}</BlockTitle>
        <Block strong mediumInset>
          <p>{props.course.description}</p>
        </Block>


      </React.Fragment>
    )
  } else {
    return (null)
  }
}
export default CourseShow;
