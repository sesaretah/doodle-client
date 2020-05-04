import React from "react";
import { List, ListInput, BlockTitle, Block, Link, Button, Card, CardHeader, CardFooter} from 'framework7-react';
import { dict} from '../../Dict';
import { Editor } from 'react-draft-wysiwyg';
import { fa} from '../../js/fa';
const CommentForm = (props) => {
    return (
      <Card>
        <List form>
        <Editor
              editorState={props.editorState}
              placeholder={dict.content}
              //localization={{
               // locale: 'fa',
               // translations: fa
              //}}
              toolbar={{
                options: ['inline', 'list', 'link'],
                inline: { options: ['bold', 'italic', 'underline'] },
              }}
              onEditorStateChange={props.onEditorStateChange}
            />
        </List>
        <CardFooter>
          <Link></Link>
          <Button className="col" fill onClick={props.submit}>{dict.submit}</Button>
        </CardFooter>
      </Card>
    )
  }
  export default CommentForm;
