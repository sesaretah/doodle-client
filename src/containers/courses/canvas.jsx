
import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Page, Navbar, List, BlockTitle, Card, Fab, Icon, Preloader, Block, CardContent, CardHeader, CardFooter } from 'framework7-react';
import { dict } from '../../Dict';
import { BigWhiteboard } from 'react-component-whiteboard'
import {SketchField, Tools} from 'react-sketch';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
  }

  isPainting = false;
  // Different stroke styles to be used for user and guest
  userStrokeStyle = '#EE92C2';
  guestStrokeStyle = '#F0C987';
  line = [];
  // v4 creates a unique id for each user. We used this since there's no auth to tell users apart
  userId = v4();
  prevPos = { offsetX: 0, offsetY: 0 };

  onMouseDown(nativeEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.isPainting = true;
    this.prevPos = { offsetX, offsetY };
  }

  onMouseMove(ctx, nativeEvent) {
    if (this.isPainting) {
      const { offsetX, offsetY } = nativeEvent;
      const offSetData = { offsetX, offsetY };
      // Set the start and stop position of the paint event.
      const positionData = {
        start: { ...this.prevPos },
        stop: { ...offSetData },
      };
      // Add the position to the line array
      this.line = this.line.concat(positionData);
      this.paint(ctx, this.prevPos, offSetData, this.userStrokeStyle);
    }
  }
  endPaintEvent() {
    if (this.isPainting) {
      this.isPainting = false;
      console.group(this.line)
      this.sendPaintData();
    }
  }
  paint(ctx, prevPos, currPos, strokeStyle) {
    const { offsetX, offsetY } = currPos;
    const { offsetX: x, offsetY: y } = prevPos;

    ctx.beginPath();
   // ctx.strokeStyle = strokeStyle;
    // Move the the prevPosition of the mouse
    ctx.moveTo(x, y);
    // Draw a line to the current position of the mouse
    ctx.lineTo(offsetX, offsetY);
    // Visualize the line using the strokeStyle
   // ctx.stroke();
    this.prevPos = { offsetX, offsetY };
  }

  async sendPaintData() {
    const body = {
      line: this.line,
      userId: this.userId,
    };
    // We use the native fetch API to make requests to the server
    const req = await fetch('http://localhost:4000/paint', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
      },
    });
    const res = await req.json();
    this.line = [];
  }

  componentDidMount() {
    // Here we set up the properties of the canvas element. 
    // this.canvas.width =  200;
    // this.canvas.height = 200;
    // this.ctx = this.canvas.getContext('2d');
    // this.ctx.lineJoin = 'round';
    // this.ctx.lineCap = 'round';
    // this.ctx.lineWidth = 5;
    var self = this;
    this.$$('canvas').on('mousedown', function (e) {
      self.onMouseDown(e)
    });

    this.$$('canvas').on('mouseleave', function (e) {
      self.endPaintEvent(e)
    });

    this.$$('canvas').on('mouseup', function (e) {
      self.endPaintEvent(e)
    });

    this.$$('canvas').on('mousemove', function (e) {
      self.onMouseMove( e.currentTarget.getContext('2d'),e)
    });

  }

  render() {
    return (
      <Page>
        <Navbar title={dict.courses} backLink={dict.back} >
        </Navbar>
        <BlockTitle>{dict.list}</BlockTitle>
        <Card>
          <CardHeader>dd</CardHeader>
          <CardContent>
          <div className='board'>
       

        <SketchField width='500px' 
                         height='200px' 
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
                          </div>
          </CardContent>
<CardFooter></CardFooter>
        </Card>
      </Page>
    );
  }
}
export default Canvas;