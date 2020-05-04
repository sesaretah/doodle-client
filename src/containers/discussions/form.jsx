import React from "react";
import { List, ListItem, ListInput, Block, Row, Button, BlockTitle, Card } from 'framework7-react';
import { dict } from '../../Dict';
import crypto from 'crypto-js';


const DiscussionForm = (props) => {
  if (props.privateDiscussion) {
    var isPrivateDiscussion = true;
  } else {
    var isPrivateDiscussion = false
  }
  return (
    <Card>
      <BlockTitle>{dict.discussion}</BlockTitle>
      <List form>
        <ListInput
          label={dict.title}
          type="text"
          placeholder={dict.select_appropriate_title}
          defaultValue={props.discussion.title}
          onInput={(e) => {
            props.handleChange({ title: e.target.value })
          }}
        />


        <ListItem title={dict.discussion_type} className="fs-10"></ListItem>
        <ListItem className="fs-10" radio value={false} checked={!isPrivateDiscussion} name="defaultDiscussion" title={dict.public}
          onChange={(e) => {
            console.log(e)
            props.handleChange({ privateDiscussion: JSON.parse(e.target.value) })
          }}>
        </ListItem>
        <ListItem className="fs-10" radio value={true} checked={isPrivateDiscussion} name="defaultDiscussion" title={dict.private}
          onChange={(e) => {
            console.log(e)
            props.handleChange({ privateDiscussion: JSON.parse(e.target.value) });
          }}>
        </ListItem>
      </List>

      <Block strong>
        <Row tag="p">
          <Button className="col" fill disabled={!props.editing} onClick={props.submit}>{dict.submit}</Button>
        </Row>
      </Block>
    </Card>
  )
}
export default DiscussionForm;
