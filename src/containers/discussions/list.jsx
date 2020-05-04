import React from "react";
import { List, ListItem } from 'framework7-react';
import crypto from 'crypto-js';
import { dict } from "../../Dict";

const DiscussionList = (props) => {

  if (props.discussions) {
    return (
      <React.Fragment>
        <List>
        {props.discussions.map((discussion) =>
          <ListItem
          title={discussion.title}
          link={'/discussions/'+discussion.id}
          subtitle="">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-1.jpg" width="44" />
        </ListItem>
        )}
        </List>
      </React.Fragment>
    )
  } else {
    return (<ul></ul>)
  }
}
export default DiscussionList;
