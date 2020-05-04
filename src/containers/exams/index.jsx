import React from "react";
import { Page, Navbar, List, BlockTitle, ListItem, Fab, Icon,Preloader, Block} from 'framework7-react';
import ExamList from "./list"
import { dict} from '../../Dict';

const ExamIndex = (props) => {
  return(
    <Page>
      <Navbar title={dict.exams} backLink={dict.back} >
      </Navbar>
      <BlockTitle>{dict.list}</BlockTitle>
      <Fab href="/exams/new" target="#main-view"  position="left-bottom" slot="fixed" color="deeporange">
        <Icon ios="f7:add" aurora="f7:add" md="material:add"></Icon>
        <Icon ios="f7:close" aurora="f7:close" md="material:close"></Icon>
      </Fab>
      <ExamList exams={props.exams}/>
    </Page>
  )
}
export default ExamIndex;
