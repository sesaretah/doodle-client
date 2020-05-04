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
import ExamForm from "../../containers/exams/form"
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
      exam : {},
      defaultExam: null,
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
    var data = {id:this.state.id, title: this.state.title, default_exam: this.state.defaultExam}
    MyActions.updateInstance('exams', data,  this.state.token);
  }
  componentDidMount(){
    this.loadData();
  }

  loadData(){
    const f7: Framework7 = Framework7.instance;
    f7.toast.show({ text: dict.receiving, closeTimeout: 2000, position: 'top'});
    if (this.$f7route.params['examId']) {
      MyActions.getInstance('exams', this.$f7route.params['examId'],  this.state.token);
    }
  }


  getInstance(){
    var exam = ModelStore.getIntance()
    var klass = ModelStore.getKlass()
    if (exam && klass === 'Exam'){
      this.setState({
        title: exam.title,
        id: exam.id,
        exam: exam,
        defaultExam: exam.default_exam
      });
    }
  }

  handleChangeValue(obj) {
    this.setState(obj);
  }


  setInstance(){
    const self = this;
    this.$f7router.navigate('/exams/');
  }


  render() {
        const {exam, defaultExam} = this.state;
    return (
      <Page>
        <Navbar title={dict.exam_form} backLink={dict.back} />
        <BlockTitle>{dict.exam_form}</BlockTitle>
        <ExamForm exam={exam} defaultExam={defaultExam} submit={this.submit} editing={true} handleChange={this.handleChangeValue}/>
      </Page>
    );
  }
}
