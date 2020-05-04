import React, { Component } from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
  ListInput,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  Icon
} from 'framework7-react';
import { dict} from '../../Dict';
import ModelStore from "../../stores/ModelStore";
import * as MyActions from "../../actions/MyActions";
import DiscussionForm from "../../containers/discussions/form"
import Framework7 from 'framework7/framework7.esm.bundle';


export default class DocumentUpdate extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.setInstance = this.setInstance.bind(this);
    this.getInstance = this.getInstance.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);


    this.state = {
      token: window.localStorage.getItem('token'),
      discussion : {},
      defaultDiscussion: null,
    }
  }

  componentWillMount() {
    ModelStore.on("got_instance", this.getInstance);
    ModelStore.on("set_instance", this.setInstance);
  }

  componentWillUnmount() {
    ModelStore.removeListener("got_instance", this.getInstance);
    ModelStore.removeListener("set_instance", this.setInstance);

  }


  submit(){
    var data = {id:this.state.id, title: this.state.title, default_discussion: this.state.defaultDiscussion}
    MyActions.updateInstance('discussions', data,  this.state.token);
  }
  componentDidMount(){
    this.loadData();
  }

  loadData(){
    const f7: Framework7 = Framework7.instance;
    f7.toast.show({ text: dict.receiving, closeTimeout: 2000, position: 'top'});
    if (this.$f7route.params['discussionId']) {
      MyActions.getInstance('discussions', this.$f7route.params['discussionId'],  this.state.token);
    }
  }


  getInstance(){
    var discussion = ModelStore.getIntance()
    var klass = ModelStore.getKlass()
    if (discussion && klass === 'Discussion'){
      this.setState({
        title: discussion.title,
        id: discussion.id,
        discussion: discussion,
        defaultDiscussion: discussion.default_discussion
      });
    }
  }

  handleChangeValue(obj) {
    this.setState(obj);
  }


  setInstance(){
    const self = this;
    this.$f7router.navigate('/discussions/');
  }


  render() {
        const {discussion, defaultDiscussion} = this.state;
    return (
      <Page>
        <Navbar title={dict.discussion_form} backLink={dict.back} />
        <BlockTitle>{dict.discussion_form}</BlockTitle>
        <DiscussionForm discussion={discussion} defaultDiscussion={defaultDiscussion} submit={this.submit} editing={true} handleChange={this.handleChangeValue}/>
      </Page>
    );
  }
}
