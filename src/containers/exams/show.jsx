import React from "react";
import { Block, BlockTitle } from 'framework7-react';
import { dict } from '../../Dict';

const ExamShow = (props) => {
  if (props.exam) {
    return (
      <React.Fragment>
        <BlockTitle>{dict.title}</BlockTitle>
        <Block strong mediumInset>
          <p>{props.exam.title}</p>
        </Block>

        <BlockTitle>{dict.description}</BlockTitle>
        <Block strong mediumInset>
          <p>{props.exam.description}</p>
        </Block>


      </React.Fragment>
    )
  } else {
    return (null)
  }
}
export default ExamShow;
