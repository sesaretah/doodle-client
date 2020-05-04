import React, { Component } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
} from 'framework7-react';
import { dict} from '../../Dict';
import ModelStore from "../../stores/ModelStore";
import * as MyActions from "../../actions/MyActions";
import ExamForm from "../../containers/exams/form"

export default class ExamCreate extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.setInstance = this.setInstance.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);

    this.state = {
      token: window.localStorage.getItem('token'),
      exam: {},
      privateExam: true,
    }
  }


  componentWillMount() {
    ModelStore.on("set_instance", this.setInstance);
  }

  componentWillUnmount() {
    ModelStore.removeListener("set_instance", this.setInstance);
  }

  componentDidMount(){
    const self = this;
    const app = self.$f7;

    app.calendar.create({
      inputEl: '#demo-calendar-default',
      closeOnSelect : true,
      /*  events: [      {
      date: today,
      color: '#ff0000'
      },],*/
      firstDay : 6,
      weekendDays : [4, 5],
      monthNames : ['فروردين', 'ارديبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
      dayNames : ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
      dayNamesShort : ['یک', 'دو', 'سه ', 'چهار', 'پنج‌', 'جمعه', 'شنبه']
    });
  }

  submit(){
    var data = {title: this.state.title, private_exam: this.state.privateExam}
    MyActions.setInstance('exams', data, this.state.token);
  }


  handleChangeValue(obj) {
    this.setState(obj);
  }

  setInstance(){
    const self = this;
    this.$f7router.navigate('/exams/');
  }



  render() {
    const {exam} = this.state;
    return (
      <Page>
        <Navbar title={dict.exam_form} backLink={dict.back} />
        <BlockTitle>{dict.exam_form}</BlockTitle>
        <ExamForm exam={exam} submit={this.submit} editing={true} handleChange={this.handleChangeValue}/>
      </Page>
    );
  }
}
