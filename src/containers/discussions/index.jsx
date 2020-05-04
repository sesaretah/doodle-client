import React from "react";
import { Page, Navbar, List, BlockTitle, ListItem, Fab, Icon,Preloader, Block} from 'framework7-react';
import DiscussionList from "./list"
import { dict} from '../../Dict';

const DiscussionIndex = (props) => {
  return(
    <Page>
      <Navbar title={dict.discussions} backLink={dict.back} >
      </Navbar>
      <BlockTitle>{dict.list}</BlockTitle>
      <Fab href="/discussions/new" target="#main-view"  position="left-bottom" slot="fixed" color="deeporange">
        <Icon ios="f7:add" aurora="f7:add" md="material:add"></Icon>
        <Icon ios="f7:close" aurora="f7:close" md="material:close"></Icon>
      </Fab>
      <DiscussionList discussions={props.discussions}/>
    </Page>
  )
}
export default DiscussionIndex;
