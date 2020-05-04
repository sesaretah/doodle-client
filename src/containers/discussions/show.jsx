import React from "react";
import { Block, BlockTitle, ListItem, List, AccordionContent } from 'framework7-react';
import { dict } from '../../Dict';
import CommentForm from "../comments/form"
import UploadForm from "../uploads/form"
import CommentList from "../comments/list"

const DiscussionShow = (props) => {
  if (props.discussion) {
    return (
      <React.Fragment>
        <List>
          <ListItem
            title={props.discussion.title}
            subtitle="">
            <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg" width="44" />
          </ListItem>
        </List>
        <List accordionList>
          <ListItem accordionItem title={dict.comment_form}>
            <AccordionContent>
                <CommentForm post={props.discussion} submit={props.submitComment} handleChange={props.handleChange} editorState={props.editorState} onEditorStateChange={props.onEditorStateChange} uploadImageCallBack={props.uploadImageCallBack} />
                <UploadForm uploadableType='Discussion' />
            </AccordionContent>
          </ListItem>
        </List>
        
        <Block>
          <List>
            <ListItem
              title={props.discussion.title}
              subtitle="">
              <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg" width="44" />
            </ListItem>
          </List>
        </Block>



      </React.Fragment>
    )
  } else {
    return (null)
  }
}
export default DiscussionShow;
