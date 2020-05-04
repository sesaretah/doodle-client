import React, { Component } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
} from 'framework7-react';
import { dict} from '../../Dict';
import ModelStore from "../../stores/ModelStore";
import * as MyActions from "../../actions/MyActions";
import DiscussionForm from "../../containers/discussions/form"

export default class DiscussionCreate extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.setInstance = this.setInstance.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);

    this.state = {
      token: window.localStorage.getItem('token'),
      discussion: {},
      privateDiscussion: true,
    }
  }


  componentWillMount() {
    ModelStore.on("set_instance", this.setInstance);
  }

  componentWillUnmount() {
    ModelStore.removeListener("set_instance", this.setInstance);
  }

  submit(){
    var data = {title: this.state.title, private: this.state.privateDiscussion}
    MyActions.setInstance('discussions', data, this.state.token);
  }


  handleChangeValue(obj) {
    this.setState(obj);
  }

  setInstance(){
    const self = this;
    this.$f7router.navigate('/discussions/');
  }



  render() {
    const {discussion} = this.state;
    return (
      <Page>
        <Navbar title={dict.discussion_form} backLink={dict.back} />
        <BlockTitle>{dict.discussion_form}</BlockTitle>
        <DiscussionForm discussion={discussion} submit={this.submit} editing={true} handleChange={this.handleChangeValue}/>
      </Page>
    );
  }
}
