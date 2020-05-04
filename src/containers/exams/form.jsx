import React from "react";
import { List, Icon, ListInput, Block, Row, Button, BlockTitle, Card } from 'framework7-react';
import { dict } from '../../Dict';
import crypto from 'crypto-js';


const ExamForm = (props) => {
  if (props.privateExam) {
    var isPrivateExam = true;
  } else {
    var isPrivateExam = false
  }
  return (
    <Card>
      <BlockTitle>{dict.exam}</BlockTitle>
      <List form>
        <ListInput
          label={dict.title}
          type="text"
          placeholder={dict.select_appropriate_title}
          defaultValue={props.exam.title}
          onInput={(e) => {
            props.handleChange({ title: e.target.value })
          }}
        />

        <ListInput
          label={dict.details}
          type="textarea"
          placeholder={dict.write_appropriate_description}
          defaultValue={props.exam.content}
          onInput={(e) => {
            props.handleChange({ content: e.target.value })
          }}
        />

<li>
                <div class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-input-wrap">
                      <input type="text" placeholder="" readonly="readonly" id="demo-calendar-default"/>
                    </div>
                  </div>
                </div>
              </li>
      </List>

      <Block strong>
        <Row tag="p">
          <Button className="col" fill disabled={!props.editing} onClick={props.submit}>{dict.submit}</Button>
        </Row>
      </Block>
    </Card>
  )
}
export default ExamForm;
